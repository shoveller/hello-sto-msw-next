'use client'

import { FC, PropsWithChildren, Suspense } from 'react'

import { success } from '@/api/mock/handlers'

const useMSW = () => {
  // 브라우저에서만 실행
  if (typeof window === 'undefined') return

  const initMSW = async () => {
    const { setupWorker } = await import('msw/browser')
    await setupWorker(success).start()
  }

  // Promise를 throw하여 Suspense가 처리하도록 처리
  throw initMSW()
}

const MSWInitializer: FC<PropsWithChildren> = ({ children }) => {
  useMSW()

  return children
}

const MockProvider: FC<PropsWithChildren> = ({ children }) => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <Suspense fallback="MSW 초기화 중...">
        <MSWInitializer>{children}</MSWInitializer>
      </Suspense>
    )
  }

  return children
}

export default MockProvider
