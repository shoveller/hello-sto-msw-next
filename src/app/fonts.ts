// app/fonts.ts (폰트 정의 파일)
import localFont from 'next/font/local'

export const nanumSquare = localFont({
  src: [
    {
      path: '../../public/fonts/NanumSquareL.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/NanumSquareR.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/NanumSquareB.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/NanumSquareEB.woff2',
      weight: '800',
      style: 'normal'
    }
  ],
  variable: '--font-nanum-square',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif']
})
