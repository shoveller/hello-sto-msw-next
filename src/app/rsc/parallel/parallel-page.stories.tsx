import ServerComponentWrapper from '@/app/ServerComponentWrapper'
import type { Meta, StoryObj } from '@storybook/nextjs'

import page from './page'

const meta = {
  component: page
} satisfies Meta<typeof page>

export default meta

type Story = StoryObj<typeof meta>

export const 실험: Story = {
  render: () => {
    return (
      <ServerComponentWrapper fallback={<div>서버 컴포넌트 로딩중...</div>}>
        {page}
      </ServerComponentWrapper>
    )
  }
}
