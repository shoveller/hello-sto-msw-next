import type { Preview } from '@storybook/nextjs'
import { initialize, mswLoader } from 'msw-storybook-addon'

// MSW 다시 활성화
initialize()

const preview: Preview = {
  parameters: {
    react: { rsc: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    nextjs: {
      appDirectory: true
    }
  },
  loaders: [mswLoader]
}

export default preview
