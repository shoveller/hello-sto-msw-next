- 셀프호스팅을 할 때 서버사이드 캐시를 마련할 형편이 안 될수도 있다.
- 이럴 때는 최초 1회만 SSR을 이용하고, 이후의 캐시는 클라이언트에 저장하는 것도 방법이다.
- [[next.js 15의 app route + ssg 용 스케폴드 레시피(2025.08)]] 를 ssr 모드로 개선하는 레시피를 정리한다.
# 스탠드얼론 모드 설정
- `next.config.ts` 의 `output` 을 `standalone` 으로 설정한다.
    - `standalone` 모드는 node.js 에서 독립 실행이 가능한 빌드를 생성한다.
```diff
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
+ output: 'standalone',
  images: {
    unoptimized: true // cdn 레벨의 이미지 최적화를 사용하지 않는다
  }
}

export default nextConfig
```

# react-query 설치
- 개발도구와 구현체를 설치한다. 평이하다.
```sh
pnpm i @tanstack/react-query
```

```sh
pnpm i @tanstack/react-query-devtools -D
```

# 다중 프로바이더 설정
- 서버의 데이터를 클라이언트로 직렬화해서 보내는 것이 핵심이다.
```mermaid
graph TD
    A["root layout (server)"] --> B["ServerSideProvider (server)"]
    B --> C["ReactQueryProvider (client)"]
    C --> D["root page (server)"]
    D --> E["children page<br/>(server or client)"]
    
    style A fill:#e1f5fe
    style B fill:#e1f5fe
    style C fill:#fff3e0
    style D fill:#e1f5fe
    style E fill:#f3e5f5
```
- 실제 구현은 아래와 같은 모습이 된다.
```mermaid
flowchart TD
    subgraph "Next.js App Structure"
        A["🔷 root layout (server)<br/>- 전체 HTML 구조<br/>- 메타데이터 설정"]
        
        subgraph ServerLayer ["Server Layer"]
            B["🔷 ServerSideProvider (server)<br/>- 초기 데이터 페칭<br/>- API 호출<br/>- initialData 생성"]
        end
        
        subgraph ClientLayer ["Client Layer"]
            C["🟡 ReactQueryProvider (client)<br/>- 쿼리 캐시 관리<br/>- 클라이언트 하이드레이션<br/>- queryKey2Tuple 처리"]
        end
        
        subgraph PageLayer ["Page Layer"]
            D["🔷 root page (server)<br/>- 서버사이드 렌더링<br/>- searchParams 처리<br/>- HydrationBoundary"]
            E["🟣 children components<br/>(server or client)<br/>- PokemonList<br/>- AbilityList<br/>- 사용자 인터랙션"]
        end
    end
    
    A --> ServerLayer
    ServerLayer --> ClientLayer
    ClientLayer --> PageLayer
    D --> E
    
    style A fill:#e3f2fd,stroke:#1976d2
    style B fill:#e3f2fd,stroke:#1976d2
    style C fill:#fff8e1,stroke:#f57c00
    style D fill:#e3f2fd,stroke:#1976d2
    style E fill:#f3e5f5,stroke:#7b1fa2
```

# 하이드레이션 가능한 쿼리 프로바이더 생성
- `ReactQueryProvider` 는 클라이언트 프로바이더다.
    - react-query 자체가 클라이언트 환경에서 동작하도록 설계되었기 때문이다.
    - `useState` 안에서 초기화해서 초기화 시점을 지연하는 것이 핵심 기술이다.
- `queryKey2Tuple` 은 `prefetch` 한 `initialData` 의 키를 파싱해서 리액트 쿼리의 초기값을 제공한다.
    - 하이드레이션 실패를 막는 효과가 있다.
      `ReactQueryProvider.tsx`
```tsx
'use client'

import { FC, PropsWithChildren, useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// 'query,0' 등으로 직렬화된 문자열을 숫자와 문자의 튜플로 변환
const queryKey2Tuple = (queryKey: string): (string | number)[] => {
  return queryKey.split(',').map((segment): string | number => {
    const trimmed = segment.trim()

    // 빈 문자열 처리
    if (trimmed === '') return segment

    // 정수나 부동소수점 숫자 패턴 검증
    if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
      const numValue = Number(trimmed)

      if (!isNaN(numValue) && isFinite(numValue)) {
        return numValue
      }
    }

    return segment
  })
}

/**
 * SSR용 리액트 쿼리 프로바이더. 서버 데이터를 초기화하는 기능이 있음
 * @param children
 * @param initialData
 * @constructor
 */
const ReactQueryProvider: FC<
  PropsWithChildren & {
    initialData?: Record<string, unknown>
  }
> = ({ children, initialData }) => {
  const [queryClient] = useState(() => {
    const client = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000
        }
      }
    })

    // SSR 데이터를 Query Cache에 미리 설정
    if (initialData) {
      Object.entries(initialData).forEach(([queryKey, data]) => {
        client.setQueryData(queryKey2Tuple(queryKey), data)
      })
    }

    return client
  })

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
```

# 서버사이드 프로바이더 생성
- 최상위에서 클라이언트 프로바이더를 하이드레이션하는 용도로 사용한다.
  `ServerSideProvider.tsx`
```tsx
import { FC, PropsWithChildren } from 'react'

import { client } from '@/api/client'
import ReactQueryProvider from '@/app/ReactQueryProvider'

/**
 * 최상위 프로바이더. 하이드레이션에 이용
 * @param children
 * @constructor
 */
const ServerSideProvider: FC<PropsWithChildren> = async ({ children }) => {
  // 최상위 하이드레이션. 최초 1회 실행된다.
  const { data } = await client.api.apiV2AbilityList({
    limit: 10,
    offset: 0
  })
  // react query 용 query key를 직렬화하는 것이 포인트
  const initialData = {
    'abilitylist,10,0': data
  }

  return (
    <ReactQueryProvider initialData={initialData}>
      {children}
    </ReactQueryProvider>
  )
}

export default ServerSideProvider
```

# next.js 의 네비게이션과 클라이언트 패치 통합
- react-router 와 DX는 비슷한데 디테일이 조금 다르다.
    - 쿼리스트링을 커스텀 훅을 사용하면 조금 나아진다.
      `PokemonList.tsx`
```tsx
'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { client } from '@/api/client'
import { useQuery } from '@tanstack/react-query'

const useQueryString = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  const limit = params.get('limit') || '10'
  const offset = params.get('offset') || '0'

  return {
    limit: Number(limit),
    offset: Number(offset)
  }
}

const usePrevSearchParams = () => {
  const { limit, offset } = useQueryString()

  return new URLSearchParams({
    limit: `${limit}`,
    offset: `${offset - 10}`
  })
}

const useNextSearchParams = () => {
  const { limit, offset } = useQueryString()

  return new URLSearchParams({
    limit: `${limit}`,
    offset: `${offset + 10}`
  })
}

export default function PokemonList() {
  const { limit, offset } = useQueryString()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['pokelist', limit, offset],
    queryFn: () =>
      client.api
        .apiV2PokemonList({
          limit: Number(limit),
          offset: Number(offset)
        })
        .then((res) => res.data)
  })
  const nextSearchParams = useNextSearchParams()
  const prevSearchParams = usePrevSearchParams()

  if (isError) {
    return <>{error.message}</>
  }

  if (isLoading) {
    return <>로딩중</>
  }

  return (
    <>
      <ul>
        {data?.results?.map((item) => {
          return <li key={item.url}>{item.name}</li>
        })}
      </ul>

      <div style={{ display: 'flex', gap: 10 }}>
        {offset > 0 && (
          <Link href={`?${prevSearchParams.toString()}`}>이전페이지</Link>
        )}
        {data?.next && (
          <Link href={`?${nextSearchParams.toString()}`}>다음페이지</Link>
        )}
      </div>
    </>
  )
}
```

# 서버 데이터를 클라이언트에 하이드레이션
- 실제로 데이터를 소비하는 컴포넌트는 평이하다.
  `Abilitylist.tsx`
```tsx
'use client'

import { client } from '@/api/client'
import { useQuery } from '@tanstack/react-query'

const Abilitylist = () => {
  const { data } = useQuery({
    queryKey: ['abilitylist', 10, 0],
    queryFn: () =>
      client.api
        .apiV2AbilityList({
          limit: 10,
          offset: 0
        })
        .then((res) => res.data)
  })

  return (
    <ul>
      {data?.results?.map((item) => {
        return <li key={item.url}>{item.name}</li>
      })}
    </ul>
  )
}

export default Abilitylist
```

# 루트 레이아웃에 서버 프로바이더 배치
- `src/layout` 에 아래와 같이 배치한다.
    - DX는 크게 다르지 않다.
```diff
import type { Metadata } from 'next'

+ import ServerSideProvider from '@/app/ServerSideProvider'

import './globals.css'

import { nanumSquare } from './fonts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={nanumSquare.variable}>
      <body className={nanumSquare.className}>
+       <ServerSideProvider>{children}</ServerSideProvider>
      </body>
    </html>
  )
}
```

# 서버사이드 프리패치
- react query는 서버사이드 데이터를 클라이언트로 전송하는 기능을 내장하고 있다.
    - `HydrationBoundary` , `dehydrate` 가 핵심 컴포넌트이다.
      `src/page.tsx`
```tsx
import { client } from '@/api/client'
import Abilitylist from '@/app/Abilitylist'
import PokemonList from '@/app/PokemonList'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'

// 서버사이드 프리패치
export default async function Home({
  searchParams
}: {
  // next.js 에는 page.js 에 서버사이드 컨텍스트를 prop으로 전달하는 기능이 있다.
  searchParams: Promise<{ limit: string; offset: string }>
}) {
  const params = await searchParams
  const limit = Number(params.limit || '10')
  const offset = Number(params.offset || '0')

  // 서버에서 쿼리 미리 실행
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['pokelist', limit, offset],
    queryFn: () =>
      client.api.apiV2PokemonList({ limit, offset }).then((res) => res.data)
  })

  // react query는 서버사이드 데이터를 클라이언트로 전송하는 기능을 내장하고 있다.
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Abilitylist />
        <PokemonList />
      </div>
    </HydrationBoundary>
  )
}
```

# msw 통합
- next.js 를 스탠드얼론 모드로 사용한다면, 서버와 클라이언트 양 쪽에 msw를 인스톨해야 한다.

## 설치
- 인스톨
```
pnpm i msw -D
```
- 서비스 워커 추가
```sh
 pnpm msw init ./public --save
```

## mock data 추가
`src/api/mock/success.json`
```json
{
  "count": 1302,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    }
  ]
}
```

## mock api 추가
`src/api/mock/handlers.ts`
```ts
import { HttpResponse, delay, http } from 'msw'

import sucessMock from './success.json'

export const success = http.get('https://pokeapi.co/api/v2/pokemon', () => {
  return HttpResponse.json(sucessMock)
})

export const loading = http.get(
  'https://pokeapi.co/api/v2/pokemon',
  async () => {
    await delay(999999)
  }
)

export const error = http.get('https://pokeapi.co/api/v2/pokemon', async () => {
  return HttpResponse.error()
})
```

## 클라이언트 프로바이더 추가
### 생성
- 아래의 레시피는 promise 를 반환하는 함수를 브라우저에서 지연실행해야 하는 미션을 구현한다.
```tsx
'use client'

import { FC, PropsWithChildren, Suspense } from 'react'

import { success } from '@/api/mock/handlers'

const useMSW = () => {
  // 브라우저에서만 실행
  if (typeof window === 'undefined') return

  const initMSW = async () => {
    const { setupWorker } = await import('msw/browser')
    await setupWorker(success).start()
  }

  // Promise를 throw하여 Suspense가 처리하도록 처리
  throw initMSW()
}

const MSWInitializer: FC<PropsWithChildren> = ({ children }) => {
  useMSW()

  return children
}

const MockProvider: FC<PropsWithChildren> = ({ children }) => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <Suspense fallback="MSW 초기화 중...">
        <MSWInitializer>{children}</MSWInitializer>
      </Suspense>
    )
  }

  return children
}

export default MockProvider
```

### 배치
- `src/app/ServerSideProvider.tsx` 에 배치한다.
```diff
import { FC, PropsWithChildren } from 'react'

import { client } from '@/api/client'
+ import MockProvider from '@/api/mock/MockProvider'
import ReactQueryProvider from '@/app/ReactQueryProvider'

/**
 * 최상위 프로바이더. 하이드레이션에 이용
 * @param children
 * @constructor
 */
const ServerSideProvider: FC<PropsWithChildren> = async ({ children }) => {
  // 최상위 하이드레이션. 최초 1회 실행된다.
  const { data } = await client.api.apiV2AbilityList({
    limit: 10,
    offset: 0
  })
  // react query 용 query key를 직렬화하는 것이 포인트
  const initialData = {
    'abilitylist,10,0': data
  }

  return (
    <ReactQueryProvider initialData={initialData}>
+     <MockProvider>{children}</MockProvider>
    </ReactQueryProvider>
  )
}

export default ServerSideProvider
```

## 서버 프로바이더 추가
- 서버사이드 msw 인스톨 함수 > 배치 순서대로 구현한다
### 생성
- `src/api/mock/registerMSW.ts` 에 생성한다.
```ts
import { SetupServer } from 'msw/node'

declare global {
  var __MSW_SERVER_STARTED__: boolean
  var __MSW_SERVER_INSTANCE__: SetupServer
}

const registerMSW = async () => {
  if (
    process.env.NEXT_RUNTIME === 'nodejs' &&
    process.env.NODE_ENV === 'development' &&
    !globalThis.__MSW_SERVER_STARTED__
  ) {
    try {
      const { setupServer } = await import('msw/node')
      const { success } = await import('./handlers')

      const server = setupServer(success)

      server.listen({
        onUnhandledRequest: 'bypass'
      })

      // 글로벌 상태 설정
      globalThis.__MSW_SERVER_STARTED__ = true
      globalThis.__MSW_SERVER_INSTANCE__ = server

      console.log('🚀 MSW 서버를 시작했습니다.')

      // 프로세스 종료 시 서버 정리
      process.on('SIGTERM', () => {
        if (globalThis.__MSW_SERVER_INSTANCE__) {
          globalThis.__MSW_SERVER_INSTANCE__.close()
          globalThis.__MSW_SERVER_STARTED__ = false
        }
      })
    } catch (error) {
      console.error('❌ MSW 서버 시작 실패:', error)
    }
  }
}

export default registerMSW
```

### 배치
- `src/instrumentation.ts` 에 배치한다.
```ts
import registerMSW from '@/api/mock/registerMSW'

export const register = async () => {
  await registerMSW()
}
```

### src/instrumentation.ts 의 개요
- `src/instrumentation.ts` 는 next.js 서버가 기동을 관할하는 메타 모듈이다.
    - 아직은 실험적인 성격이 강한 기능이지만 개발도구 설치에 꼭 필요하다.
    - 함수 2개를 구현할 수 있다.
        - `register`: 서버를 시동할때 실행하는 함수. 서버 셋업에 사용할 수 있다.
        - `onRequestError` : 서버 에러를 감지하는 함수. 센트리 등에 로그를 보낼 때 사용할 수 있다.
```ts
export const register = async () => {
  console.log('서버 시동할때 실행하는 함수', process.env.NEXT_RUNTIME)
}

export const onRequestError = async (error: Error, request: Request) => {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.table({ runtime: process.env.NEXT_RUNTIME, error, request })
  }
}
```