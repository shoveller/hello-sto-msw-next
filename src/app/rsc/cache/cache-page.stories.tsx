import type { Meta, StoryObj } from '@storybook/nextjs'
import { HttpResponse, http } from 'msw'

import page from './page'

const meta = {
  component: page,
  parameters: {
    docs: {
      description: {
        component:
          'React Server Component that demonstrates Next.js cache control with external API fetching'
      }
    }
  }
} satisfies Meta<typeof page>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'GitHub API with Cache',
  parameters: {
    msw: {
      handlers: [
        http.get('https://api.github.com/repos/vercel/next.js', () => {
          return HttpResponse.json({
            name: 'next.js',
            stargazers_count: 125000,
            description: 'The React Framework for the Web'
          })
        })
      ]
    },
    docs: {
      description: {
        story:
          'Demonstrates RSC with MSW-mocked GitHub API and Next.js cache control'
      }
    }
  }
}

export const WithError: Story = {
  name: 'API Error Handling',
  parameters: {
    msw: {
      handlers: [
        http.get('https://api.github.com/repos/vercel/next.js', () => {
          return HttpResponse.error()
        })
      ]
    },
    docs: {
      description: {
        story: 'Tests RSC error handling when external API fails'
      }
    }
  }
}
