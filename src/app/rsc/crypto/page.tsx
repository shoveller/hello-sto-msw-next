import nodeCrypto from 'crypto'

export default function ServerOnlyComponent() {
  const hash = nodeCrypto.createHash('sha256').update('hello').digest('hex')

  return (
    <div>
      <h1>Server-only Encryption</h1>
      <p>Hash: {hash}</p>
    </div>
  )
}
