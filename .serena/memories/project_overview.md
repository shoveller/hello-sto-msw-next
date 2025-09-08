# 프로젝트 개요

## 프로젝트 이름
hello-sto-msw-next

## 목적
Next.js 15를 사용한 React 19 프로젝트로, API 클라이언트 통합과 함수형 프로그래밍 패러다임을 적용한 웹 애플리케이션

## 주요 기술 스택
- **Framework**: Next.js 15.5.2 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.x
- **HTTP Client**: ky + 자동 생성된 API 클라이언트
- **State Management**: @tanstack/react-query
- **Package Manager**: pnpm
- **Build Tool**: Turbopack (--turbopack 플래그)

## 특징
- 함수형 프로그래밍 스타일 강제 (ESLint 설정)
- API 자동 생성 (swagger-typescript-api)
- 엄격한 코딩 스타일 및 포맷팅 규칙
- Husky를 통한 Git hooks 설정