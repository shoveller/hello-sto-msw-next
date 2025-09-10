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
    // Execute server component as function
    const renderServerComponent = async () => {
      try {
        // If children is a function (server component)
        if (typeof children === 'function') {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          const result = await children(args)
          setRenderedContent(result)
        } else {
          // If it's regular JSX
          setRenderedContent(children)
        }
      } catch (error) {
        console.error('Server component rendering failed:', error)
        setRenderedContent(<div>Rendering failed</div>)
      } finally {
        setIsLoading(false)
      }
    }

    renderServerComponent()
  }, [args, children])

  // Render fallback during loading
  if (isLoading) {
    return <>{fallback}</>
  }

  // Display rendered content
  return <>{renderedContent}</>
}

/**
 * Storybook decorator for wrapping server components with loading state
 * @param options - Configuration options for the decorator
 * @param options.fallback - Custom fallback UI during loading (default: "Loading server component...")
 * @returns Storybook decorator function
 *
 * @example
 * ```tsx
 * export const MyStory: Story = {
 *   decorators: [withRSC({
 *     fallback: <div>Custom loading...</div>
 *   })]
 * }
 * ```
 */
export default function withRSC(options?: { fallback?: ReactNode }) {
  const decorator = (_Story: React.ComponentType, context: unknown) => {
    // context.component is the server component function
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const serverComponent = context.component
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const args = context.args

    return (
      <RscLoader
        fallback={options?.fallback ?? <div>Loading server component...</div>}
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
