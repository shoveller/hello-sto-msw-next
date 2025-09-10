import type { Meta, StoryObj } from '@storybook/nextjs'
import { HttpResponse, http } from 'msw'

import page from './page'

const meta = {
  component: page,
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
          return HttpResponse.json({
            id: 1,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            userId: 1
          })
        })
      ]
    }
  }
} satisfies Meta<typeof page>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {}

export const WithError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
          return new HttpResponse(null, { status: 500 })
        })
      ]
    }
  }
}

export const WithDifferentData: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
          return HttpResponse.json({
            id: 1,
            title: '커스텀 제목입니다',
            body: '이것은 MSW를 통해 모킹된 데이터입니다. 원본 컴포넌트가 그대로 작동하고 있습니다.',
            userId: 1
          })
        })
      ]
    }
  }
}
