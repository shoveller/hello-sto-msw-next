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
