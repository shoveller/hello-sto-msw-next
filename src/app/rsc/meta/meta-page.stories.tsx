import type { Meta, StoryObj } from '@storybook/nextjs'

import page from './page'

const meta = {
  component: page
} satisfies Meta<typeof page>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {}

// 실제 컴포넌트를 그대로 시도해보는 스토리
export const OriginalComponent: Story = {
  render: () => {
    // 원본 컴포넌트만 렌더링 (메타데이터는 작동하지 않을 것)
    return <p>메타데이터는 Storybook에서 작동하지 않습니다</p>
  }
}
