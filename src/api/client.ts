import { Api } from '@/api/Api'
import ky from 'ky'

const customFetch = ky.create({
  hooks: {
    beforeRequest: [
      (req) => {
        return req
      }
    ],
    afterResponse: [
      (_req, _options, res) => {
        return res
      }
    ]
  }
})

export const client = new Api({
  customFetch
})
