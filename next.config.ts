import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // ssg 모드로 빌드한다
  images: {
    unoptimized: true // cdn 레벨의 이미지 최적화를 사용하지 않는다
  }
}

export default nextConfig
