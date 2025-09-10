import type { Meta, StoryObj } from '@storybook/nextjs'

import page from './page'

const meta = {
  component: page
} satisfies Meta<typeof page>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    searchParams: {
      q: '1',
      category: '카테고리'
    }
  }
}
