async function checkUserAuth() {
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
