import withRSC from '@/app/rscLoader'
import type { Meta, StoryObj } from '@storybook/nextjs'

import page from './page'

const meta = {
  component: page
} satisfies Meta<typeof page>

export default meta

type Story = StoryObj<typeof meta>

export const fail: Story = {
  decorators: [withRSC()]
}
