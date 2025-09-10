# Next.js v15 서버 컴포넌트 활용 예제

## 1. 기본 서버 컴포넌트
```typescript
// src/app/basic/page.tsx
export default function BasicServerComponent() {
  const timestamp = new Date().toISOString()
  
  return (
    <div>
      <h1>서버에서 렌더링됨</h1>
      <p>생성 시간: {timestamp}</p>
    </div>
  )
}
```

## 2. 비동기 데이터 페칭
```typescript
export default async function AsyncDataComponent() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json())
  
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}
```

## 3. 환경 변수 접근
```typescript
// src/app/env/page.tsx
export default function EnvComponent() {
  const nodeEnv = process.env.NODE_ENV
  const secretKey = process.env.SECRET_KEY || 'default'
  
  return (
    <div>
      <h1>환경: {nodeEnv}</h1>
      <p>비밀 키: {secretKey}</p>
    </div>
  )
}
```

## 4. 파일 시스템 접근
```typescript
// src/app/file-system/page.tsx
import { readdir } from 'fs/promises'
import { join } from 'path'

export default async function FileSystemComponent() {
  const files = await readdir(join(process.cwd(), 'src'))
  
  return (
    <div>
      <h1>프로젝트 파일들</h1>
      <ul>
        {files.map(file => (
          <li key={file}>{file}</li>
        ))}
      </ul>
    </div>
  )
}
```

## 5. 데이터베이스 직접 접근
```typescript
// src/app/database/page.tsx
// 가상의 DB 클라이언트
const db = {
  users: {
    findMany: async () => [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]
  }
}

export default async function DatabaseComponent() {
  const users = await db.users.findMany()
  
  return (
    <div>
      <h1>사용자 목록</h1>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
```

## 6. 서버 전용 라이브러리 사용
```typescript
// src/app/server-only/page.tsx
import crypto from 'crypto'

export default function ServerOnlyComponent() {
  const hash = crypto.createHash('sha256').update('hello').digest('hex')
  
  return (
    <div>
      <h1>서버 전용 암호화</h1>
      <p>해시: {hash}</p>
    </div>
  )
}
```

## 7. 중첩 서버 컴포넌트
```typescript
// src/app/nested/page.tsx
async function UserProfile({ userId }: { userId: number }) {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
  
  return <div>{user.name}</div>
}

async function UserPosts({ userId }: { userId: number }) {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(res => res.json())
  
  return (
    <div>
      {posts.map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}

export default function NestedServerComponent() {
  return (
    <div>
      <UserProfile userId={1} />
      <UserPosts userId={1} />
    </div>
  )
}
```

## 8. 검색 파라미터 처리
```typescript
// src/app/search/page.tsx
type SearchParams = {
  q?: string
  category?: string
}

export default function SearchComponent({
  searchParams
}: {
  searchParams: SearchParams
}) {
  const query = searchParams.q || ''
  const category = searchParams.category || 'all'
  
  return (
    <div>
      <h1>검색 결과</h1>
      <p>쿼리: {query}</p>
      <p>카테고리: {category}</p>
    </div>
  )
}
```

## 9. 동적 라우트 파라미터
```typescript
// src/app/posts/[id]/page.tsx
async function getPost(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return response.json()
}

export default async function PostPage({
  params
}: {
  params: { id: string }
}) {
  const post = await getPost(params.id)
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
```

## 10. 조건부 렌더링
```typescript
// src/app/conditional/page.tsx
async function checkUserAuth() {
  // 실제로는 인증 로직
  return Math.random() > 0.5
}

export default async function ConditionalComponent() {
  const isAuthenticated = await checkUserAuth()
  
  if (!isAuthenticated) {
    return <div>로그인이 필요합니다</div>
  }
  
  return (
    <div>
      <h1>인증된 사용자 페이지</h1>
      <p>환영합니다!</p>
    </div>
  )
}
```

## 11. 에러 처리
```typescript
// src/app/error-handling/page.tsx
async function riskyOperation() {
  if (Math.random() > 0.5) {
    throw new Error('무작위 에러 발생')
  }
  return '성공!'
}

export default async function ErrorHandlingComponent() {
  try {
    const result = await riskyOperation()
    return <div>결과: {result}</div>
  } catch (error) {
    return <div>에러 발생: {error instanceof Error ? error.message : '알 수 없는 에러'}</div>
  }
}
```

## 12. 캐시 제어
```typescript
// src/app/cache-control/page.tsx
async function getCachedData() {
  const response = await fetch('https://api.github.com/repos/vercel/next.js', {
    next: { revalidate: 60 } // 60초 캐시
  })
  return response.json()
}

export default async function CacheControlComponent() {
  const data = await getCachedData()
  
  return (
    <div>
      <h1>{data.name}</h1>
      <p>Stars: {data.stargazers_count}</p>
    </div>
  )
}
```

## 13. 스트리밍 with Suspense
```typescript
// src/app/streaming/page.tsx
import { Suspense } from 'react'

async function SlowComponent() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return <div>느린 컴포넌트 로드됨</div>
}

export default function StreamingComponent() {
  return (
    <div>
      <h1>빠른 컨텐츠</h1>
      <Suspense fallback={<div>로딩 중...</div>}>
        <SlowComponent />
      </Suspense>
    </div>
  )
}
```

## 14. 쿠키 접근
```typescript
// src/app/cookies/page.tsx
import { cookies } from 'next/headers'

export default function CookieComponent() {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')?.value || 'light'
  
  return (
    <div>
      <h1>현재 테마: {theme}</h1>
    </div>
  )
}
```

## 15. 헤더 접근
```typescript
// src/app/headers/page.tsx
import { headers } from 'next/headers'

export default function HeaderComponent() {
  const headersList = headers()
  const userAgent = headersList.get('user-agent') || 'Unknown'
  
  return (
    <div>
      <h1>사용자 에이전트</h1>
      <p>{userAgent}</p>
    </div>
  )
}
```

## 16. 메타데이터 생성
```typescript
// src/app/metadata-example/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '동적 제목',
  description: '서버에서 생성된 메타데이터'
}

export default function MetadataComponent() {
  return (
    <div>
      <h1>메타데이터가 동적으로 설정된 페이지</h1>
    </div>
  )
}
```

## 17. 병렬 데이터 페칭
```typescript
// src/app/parallel/page.tsx
async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}

export default async function ParallelComponent() {
  const [users, posts] = await Promise.all([
    getUsers(),
    getPosts()
  ])
  
  return (
    <div>
      <h1>사용자 수: {users.length}</h1>
      <h1>포스트 수: {posts.length}</h1>
    </div>
  )
}
```

## 18. 폼 제출 처리 (Server Actions)
```typescript
// src/app/form/page.tsx
async function submitForm(formData: FormData) {
  'use server'
  
  const name = formData.get('name') as string
  console.log('서버에서 처리:', name)
  
  // 실제로는 데이터베이스 저장 등
  return { success: true, message: `안녕하세요, ${name}!` }
}

export default function FormComponent() {
  return (
    <form action={submitForm}>
      <input name="name" placeholder="이름" required />
      <button type="submit">제출</button>
    </form>
  )
}
```

## 19. 로컬라이제이션
```typescript
// src/app/localization/page.tsx
export default function LocalizationComponent() {
  const locale = process.env.NEXT_LOCALE || 'ko'
  const messages = {
    ko: '안녕하세요',
    en: 'Hello',
    ja: 'こんにちは'
  }
  
  return (
    <div>
      <h1>{messages[locale as keyof typeof messages]}</h1>
      <p>현재 로케일: {locale}</p>
    </div>
  )
}
```

## 20. 서버 컴포넌트 간 데이터 공유
```typescript
// src/app/shared-data/page.tsx
async function getSharedData() {
  return {
    timestamp: Date.now(),
    random: Math.random()
  }
}

async function ComponentA({ data }: { data: any }) {
  return <div>컴포넌트 A: {data.timestamp}</div>
}

async function ComponentB({ data }: { data: any }) {
  return <div>컴포넌트 B: {data.random}</div>
}

export default async function SharedDataComponent() {
  const sharedData = await getSharedData()
  
  return (
    <div>
      <ComponentA data={sharedData} />
      <ComponentB data={sharedData} />
    </div>
  )
}
```