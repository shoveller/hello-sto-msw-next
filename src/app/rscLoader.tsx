'use client'

import React, { ReactNode, useEffect, useState } from 'react'

type ServerComponentWrapperProps = {
  children: (() => Promise<ReactNode>) | ReactNode
  args: Record<never, never>
  fallback?: ReactNode
}

export function RscLoader({
  children,
  args,
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          const result = await children(args)
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

/**
 * Storybook decorator for wrapping server components with loading state
 * @param options - Configuration options for the decorator
 * @param options.fallback - Custom fallback UI during loading (default: "서버 컴포넌트 로딩중...")
 * @returns Storybook decorator function
 *
 * @example
 * ```tsx
 * export const MyStory: Story = {
 *   decorators: [withServerComponent({
 *     fallback: <div>Custom loading...</div>
 *   })]
 * }
 * ```
 */
export default function withRSC(options?: { fallback?: ReactNode }) {
  const decorator = (_Story: React.ComponentType, context: unknown) => {
    // context.component가 서버 컴포넌트 함수
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const serverComponent = context.component
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const args = context.args

    // TODO: serverComponent 가 파라미터를 받는 경우에 대응하지 못함. prop을 render prop 형식으로 넘겨야 한다
    return (
      <RscLoader
        fallback={options?.fallback ?? <div>서버 컴포넌트 로딩중...</div>}
        args={args}
      >
        {serverComponent}
      </RscLoader>
    )
  }
  // eslint-disable-next-line functional/immutable-data
  decorator.displayName = 'withRSC'

  return decorator
}
