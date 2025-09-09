import { SetupServer } from 'msw/node'

declare global {
  var __MSW_SERVER_STARTED__: boolean
  var __MSW_SERVER_INSTANCE__: SetupServer
}

const registerMSW = async () => {
  if (
    process.env.NEXT_RUNTIME === 'nodejs' &&
    process.env.NODE_ENV === 'development' &&
    !globalThis.__MSW_SERVER_STARTED__
  ) {
    try {
      const { setupServer } = await import('msw/node')
      const { success } = await import('./handlers')

      const server = setupServer(success)

      server.listen({
        onUnhandledRequest: 'bypass'
      })

      // 글로벌 상태 설정
      globalThis.__MSW_SERVER_STARTED__ = true
      globalThis.__MSW_SERVER_INSTANCE__ = server

      console.log('🚀 MSW 서버를 시작했습니다.')

      // 프로세스 종료 시 서버 정리
      process.on('SIGTERM', () => {
        if (globalThis.__MSW_SERVER_INSTANCE__) {
          globalThis.__MSW_SERVER_INSTANCE__.close()
          globalThis.__MSW_SERVER_STARTED__ = false
        }
      })
    } catch (error) {
      console.error('❌ MSW 서버 시작 실패:', error)
    }
  }
}

export default registerMSW
