import { cookies } from 'next/headers'

export default async function CookieComponent() {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')?.value || 'light'

  return (
    <div>
      <h1>현재 테마: {theme}</h1>
    </div>
  )
}
