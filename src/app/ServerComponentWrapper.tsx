'use client'

import { ReactNode, useEffect, useState } from 'react'

type ServerComponentWrapperProps = {
  children: (() => Promise<ReactNode>) | ReactNode
  fallback?: ReactNode
}

export default function ServerComponentWrapper({
  children,
  fallback = <div>Loading...</div>
}: ServerComponentWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [renderedContent, setRenderedContent] = useState<ReactNode>(null)

  useEffect(() => {
    // 서버 컴포넌트를 함수로 실행
    const renderServerComponent = async () => {
      try {
        // children이 함수인 경우 (서버 컴포넌트)
        if (typeof children === 'function') {
          const result = await children()
          setRenderedContent(result)
        } else {
          // 일반 JSX인 경우
          setRenderedContent(children)
        }
      } catch (error) {
        console.error('서버 컴포넌트 렌더링 실패:', error)
        setRenderedContent(<div>렌더링 실패</div>)
      } finally {
        setIsLoading(false)
      }
    }

    renderServerComponent()
  }, [children])

  // 로딩 중이면 fallback 렌더링
  if (isLoading) {
    return <>{fallback}</>
  }

  // 렌더링된 컨텐츠 표시
  return <>{renderedContent}</>
}
