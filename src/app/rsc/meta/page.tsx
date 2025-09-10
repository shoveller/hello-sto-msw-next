import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '동적 제목',
  description: '서버에서 생성된 메타데이터'
}

export default function MetadataComponent() {
  return (
    <div>
      <h1>메타데이터가 동적으로 설정된 페이지</h1>
    </div>
  )
}
