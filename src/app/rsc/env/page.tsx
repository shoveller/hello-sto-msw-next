export default function EnvComponent() {
  const nodeEnv = process.env.NODE_ENV
  const secretKey = process.env.SECRET_KEY || 'default'

  return (
    <div>
      <h1>환경: {nodeEnv}</h1>
      <p>비밀 키: {secretKey}</p>
    </div>
  )
}
