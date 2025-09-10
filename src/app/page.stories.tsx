import withRSC from '@/app/rscLoader'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { QueryClient, QueryClientContext } from '@tanstack/react-query'

import page from './page'

const meta = {
  component: page
} satisfies Meta<typeof page>

export default meta

type Story = StoryObj<typeof meta>

export const 기본표시: Story = {
  decorators: [
    withRSC(),
    (Story) => {
      return (
        <QueryClientContext value={new QueryClient()}>
          <Story />
        </QueryClientContext>
      )
    }
  ],
  args: {
    searchParams: Promise.resolve({
      limit: '1',
      offset: '0'
    })
  }
}
