'use client'

import { client } from '@/api/client'
import { useQuery } from '@tanstack/react-query'

// Storybook용 PokemonList (useSearchParams 제거)
export default function PokemonListStory({
  limit = 10,
  offset = 0
}: {
  limit?: number
  offset?: number
}) {
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

  if (isError) {
    return <div>에러: {error.message}</div>
  }

  if (isLoading) {
    return <div>로딩중...</div>
  }

  return (
    <>
      <h2>포켓몬 목록</h2>
      <ul>
        {data?.results?.map((item) => {
          return <li key={item.url}>{item.name}</li>
        })}
      </ul>

      <div style={{ display: 'flex', gap: 10 }}>
        {offset > 0 && (
          <button onClick={() => console.log('이전 페이지')}>이전페이지</button>
        )}
        {data?.next && (
          <button onClick={() => console.log('다음 페이지')}>다음페이지</button>
        )}
      </div>

      <p>
        현재: limit={limit}, offset={offset}
      </p>
    </>
  )
}
