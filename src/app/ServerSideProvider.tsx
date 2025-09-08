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
