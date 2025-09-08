# 코드베이스 구조

## 디렉터리 구조
```
├── src/
│   ├── app/           # Next.js App Router 페이지
│   │   ├── page.tsx   # 메인 페이지
│   │   ├── layout.tsx # 레이아웃 컴포넌트
│   │   ├── Client.tsx # 클라이언트 컴포넌트
│   │   └── RSC.tsx    # React Server Component
│   ├── api/           # API 관련
│   │   ├── Api.ts     # 자동 생성된 API 클라이언트
│   │   └── client.ts  # API 클라이언트 설정
│   └── types/         # TypeScript 타입 정의
│       └── css.d.ts   # CSS 모듈 타입
├── public/            # 정적 파일
├── .husky/           # Git hooks
└── config files
```

## 주요 구성 요소

### API 클라이언트
- `src/api/client.ts`: ky HTTP 클라이언트 설정
- 요청/응답 인터셉터 설정
- `src/api/Api.ts`: 자동 생성된 API 타입 및 클라이언트

### React 컴포넌트
- App Router 구조 사용
- Server/Client 컴포넌트 분리
- TanStack Query를 통한 상태 관리

### 설정 파일
- `next.config.ts`: Next.js 설정 (standalone 출력, 이미지 최적화 비활성화)
- `eslint.config.mjs`: 함수형 프로그래밍 스타일 강제
- `.prettierrc.json`: 코드 포맷팅 규칙