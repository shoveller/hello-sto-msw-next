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
