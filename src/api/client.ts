import { Api } from '@/api/Api'
import ky from 'ky'

const customFetch = ky.create({
  hooks: {
    beforeRequest: [
      (req) => {
        console.log(`req 인터셉트`, req)
      }
    ],
    afterResponse: [
      (req, options, res) => {
        console.log('res 인터셉트', req, options)

        return res
      }
    ]
  }
})

export const client = new Api({
  customFetch
})
