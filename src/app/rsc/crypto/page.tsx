import nodeCrypto from 'crypto'

export default function ServerOnlyComponent() {
  const hash = nodeCrypto.createHash('sha256').update('hello').digest('hex')

  return (
    <div>
      <h1>서버 전용 암호화</h1>
      <p>해시: {hash}</p>
    </div>
  )
}
