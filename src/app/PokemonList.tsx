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
