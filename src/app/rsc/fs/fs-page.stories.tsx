import withRSC from '@/app/rscLoader'
import type { Meta, StoryObj } from '@storybook/nextjs'

import page from './page'

const meta = {
  component: page
} satisfies Meta<typeof page>

export default meta

type Story = StoryObj<typeof meta>

export const 성공: Story = {
  decorators: [withRSC()],
  render: () => {
    return <p>파일 시스템 렌더링은 스토리북이 지원하지 않음</p>
  }
}
