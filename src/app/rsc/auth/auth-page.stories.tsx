import type { Meta, StoryObj } from '@storybook/nextjs'

import page from './page'

const meta = {
  component: page,
  parameters: {
    docs: {
      description: {
        component:
          'React Server Component that demonstrates conditional rendering based on authentication status'
      }
    }
  }
} satisfies Meta<typeof page>

export default meta

type Story = StoryObj<typeof meta>

export const 성공: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Shows either login required message or authenticated user page based on random auth check'
      }
    }
  }
}
