import type { Meta, StoryObj } from '@storybook/nextjs'
import { HttpResponse, http } from 'msw'

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

export const Default: Story = {
  name: 'Nested Server Components',
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/users/1', () => {
          return HttpResponse.json({
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
          })
        }),
        http.get('https://jsonplaceholder.typicode.com/users/1/posts', () => {
          return HttpResponse.json([
            {
              id: 1,
              title:
                'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
              body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
              id: 2,
              title: 'qui est esse',
              body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis'
            },
            {
              id: 3,
              title:
                'ea molestias quasi exercitationem repellat qui ipsa sit aut',
              body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore'
            }
          ])
        })
      ]
    },
    docs: {
      description: {
        story:
          'Shows nested server components fetching user profile and posts in parallel with MSW mocking'
      }
    }
  }
}

export const WithApiErrors: Story = {
  name: 'API Error Handling',
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/users/1', () => {
          return HttpResponse.error()
        }),
        http.get('https://jsonplaceholder.typicode.com/users/1/posts', () => {
          return HttpResponse.error()
        })
      ]
    },
    docs: {
      description: {
        story:
          'Tests error handling when nested server components encounter API failures'
      }
    }
  }
}

export const PartialError: Story = {
  name: 'Partial API Error',
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/users/1', () => {
          return HttpResponse.json({
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
          })
        }),
        http.get('https://jsonplaceholder.typicode.com/users/1/posts', () => {
          return HttpResponse.error()
        })
      ]
    },
    docs: {
      description: {
        story:
          'Tests scenario where one nested component succeeds while another fails'
      }
    }
  }
}
