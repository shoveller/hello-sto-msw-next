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
