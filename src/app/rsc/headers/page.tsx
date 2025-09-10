import { headers } from 'next/headers'

export default async function HeaderComponent() {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent') || 'Unknown'

  return (
    <div>
      <h1>사용자 에이전트</h1>
      <p>{userAgent}</p>
    </div>
  )
}
