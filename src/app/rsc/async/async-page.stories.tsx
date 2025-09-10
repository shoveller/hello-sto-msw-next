import withRSC from '@/app/rscLoader'
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

export const MSW_목킹: Story = {
  decorators: [withRSC()]
}
