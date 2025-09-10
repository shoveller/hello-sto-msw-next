export default function BasicServerComponent() {
  const timestamp = new Date().toISOString()

  return (
    <div>
      <h1>서버에서 렌더링됨</h1>
      <p>생성 시간: {timestamp}</p>
    </div>
  )
}
