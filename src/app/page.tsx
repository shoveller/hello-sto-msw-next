import Link from 'next/link'

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
  console.log('렌더링이 되나')
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
        <div>
          <h2>React Server Components 사용사례</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 10,
              marginBottom: 20
            }}
          >
            <Link
              href="/rsc/basic"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>기본 서버 컴포넌트</strong>
              <br />
              <small>서버에서 생성된 타임스탬프</small>
            </Link>
            <Link
              href="/rsc/async"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>비동기 데이터 페칭</strong>
              <br />
              <small>JSONPlaceholder API 호출</small>
            </Link>
            <Link
              href="/rsc/env"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>환경 변수 접근</strong>
              <br />
              <small>NODE_ENV, SECRET_KEY 출력</small>
            </Link>
            <Link
              href="/rsc/fs"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>파일 시스템 접근</strong>
              <br />
              <small>src 디렉토리 파일 목록</small>
            </Link>
            <Link
              href="/rsc/db"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>데이터베이스 접근</strong>
              <br />
              <small>모의 DB 사용자 조회</small>
            </Link>
            <Link
              href="/rsc/crypto"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>서버 전용 라이브러리</strong>
              <br />
              <small>crypto 모듈 해시 생성</small>
            </Link>
            <Link
              href="/rsc/nested"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>중첩 서버 컴포넌트</strong>
              <br />
              <small>사용자 프로필 + 포스트</small>
            </Link>
            <Link
              href="/rsc/search?q=hello&category=test"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>검색 파라미터 처리</strong>
              <br />
              <small>쿼리 파라미터 읽기</small>
            </Link>
            <Link
              href="/rsc/posts/1"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>동적 라우트</strong>
              <br />
              <small>포스트 ID로 상세 조회</small>
            </Link>
            <Link
              href="/rsc/auth"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>조건부 렌더링</strong>
              <br />
              <small>랜덤 인증 상태 확인</small>
            </Link>
            <Link
              href="/rsc/error"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>에러 처리</strong>
              <br />
              <small>try-catch 에러 복구</small>
            </Link>
            <Link
              href="/rsc/cache"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>캐시 제어</strong>
              <br />
              <small>GitHub API 60초 캐시</small>
            </Link>
            <Link
              href="/rsc/stream"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>스트리밍</strong>
              <br />
              <small>Suspense 점진적 로딩</small>
            </Link>
            <Link
              href="/rsc/cookies"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>쿠키 접근</strong>
              <br />
              <small>theme 쿠키 읽기</small>
            </Link>
            <Link
              href="/rsc/headers"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>헤더 접근</strong>
              <br />
              <small>User-Agent 정보</small>
            </Link>
            <Link
              href="/rsc/meta"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>메타데이터 생성</strong>
              <br />
              <small>동적 title, description</small>
            </Link>
            <Link
              href="/rsc/parallel"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>병렬 데이터 페칭</strong>
              <br />
              <small>Promise.all로 동시 호출</small>
            </Link>
            <Link
              href="/rsc/form"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>서버 액션</strong>
              <br />
              <small>폼 제출 처리</small>
            </Link>
            <Link
              href="/rsc/locale"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>로컬라이제이션</strong>
              <br />
              <small>다국어 메시지 출력</small>
            </Link>
            <Link
              href="/rsc/shared"
              style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
                textDecoration: 'none'
              }}
            >
              <strong>데이터 공유</strong>
              <br />
              <small>컴포넌트 간 상태 전달</small>
            </Link>
          </div>
        </div>
        <Abilitylist />
        <PokemonList />
      </div>
    </HydrationBoundary>
  )
}
