import { HttpResponse, delay, http } from 'msw'

import sucessMock from './success.json'

export const success = http.get('https://pokeapi.co/api/v2/pokemon', () => {
  return HttpResponse.json(sucessMock)
})

export const loading = http.get(
  'https://pokeapi.co/api/v2/pokemon',
  async () => {
    await delay(999999)
  }
)

export const error = http.get('https://pokeapi.co/api/v2/pokemon', async () => {
  return HttpResponse.error()
})
