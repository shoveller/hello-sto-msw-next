import { Suspense } from 'react'

async function SlowComponent() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return <div>느린 컴포넌트 로드됨</div>
}

export default function StreamingComponent() {
  return (
    <div>
      <h1>빠른 컨텐츠</h1>
      <Suspense fallback={<div>스트리밍 중...</div>}>
        <SlowComponent />
      </Suspense>
    </div>
  )
}
