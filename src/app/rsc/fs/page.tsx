import { readdir } from 'fs/promises'
import { join } from 'path'

export default async function FileSystemComponent() {
  const files = await readdir(join(process.cwd(), 'src'))

  return (
    <div>
      <h1>프로젝트 파일들</h1>
      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
    </div>
  )
}
