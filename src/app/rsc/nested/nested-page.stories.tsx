import type { Meta, StoryObj } from '@storybook/nextjs'

import page from './page'

const meta = {
  component: page,
  parameters: {
    docs: {
      description: {
        component:
          'React Server Component demonstrating nested server components with parallel data fetching'
      }
    }
  }
} satisfies Meta<typeof page>

export default meta

type Story = StoryObj<typeof meta>

export const 실패: Story = {
  // decorators: [withRSC()],
  parameters: {
    docs: {
      description: {
        story:
          'Shows nested server components fetching user profile and posts in parallel with MSW mocking'
      }
    }
  }
}
