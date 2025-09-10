import type { Meta, StoryObj } from '@storybook/nextjs'

import page from './page'

const meta = {
  component: page
} satisfies Meta<typeof page>

export default meta

type Story = StoryObj<typeof meta>

export const 성공: Story = {
  args: {
    searchParams: {
      q: '1',
      category: '카테고리'
    }
  }
}
