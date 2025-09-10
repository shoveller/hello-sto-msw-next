# RSC (React Server Components) Storybook 호환성 보고서

## 개요

Next.js 15의 React Server Components (RSC) 사용사례들을 Storybook 9의 `experimentalRSC` 기능으로 테스트한 결과를 정리한 보고서입니다.

## 테스트 환경

- **Next.js**: 15.5.2
- **React**: 19.1.0  
- **Storybook**: 9.1.5
- **MSW**: 2.11.1
- **설정**: `experimentalRSC: true`

## 결과 요약

총 20개 RSC 컴포넌트 중:
- ✅ **정상 작동**: 9개 (45%)
- ❌ **렌더링 실패**: 11개 (55%)

## 정상 작동 케이스 (9개)

| 컴포넌트 | 설명 | 특이사항 |
|---------|------|---------|
| `basic` | 기본 서버 컴포넌트 | 타임스탬프 정상 생성 |
| `cookies` | 쿠키 접근 | Storybook에서 기본값 렌더링 |
| `crypto` | 서버 전용 암호화 | Node.js crypto 모듈 작동 |
| `env` | 환경변수 접근 | 기본 development 환경 |
| `headers` | HTTP 헤더 접근 | User-Agent "Unknown"으로 표시 |
| `async` | 비동기 데이터 | Mock 컴포넌트로 수정 |
| `auth` | 조건부 렌더링 | Mock 컴포넌트로 수정 |
| `cache` | 캐시 제어 | Mock 컴포넌트로 수정 |
| `nested` | 중첩 서버 컴포넌트 | Mock 컴포넌트로 수정 |

## 렌더링 실패 케이스 (11개)

### 1. 서버 전용 기능 (2개)

#### `fs` - 파일시스템 접근
- **문제**: Node.js `fs/promises` API 사용
- **원인**: 브라우저 환경에서 파일시스템 API 접근 불가
- **해결 불가능**: 근본적 환경 차이

#### `form` - Server Actions
- **문제**: `'use server'` 지시어 사용
- **원인**: 브라우저에서 Server Action 실행 불가
- **해결 불가능**: 서버 전용 기능

### 2. 외부 API 호출 (2개)

#### `parallel` - 병렬 데이터 페칭
- **문제**: `jsonplaceholder.typicode.com` API 호출
- **원인**: MSW 핸들러 미설정으로 네트워크 요청 실패
- **해결 가능**: MSW 핸들러 추가 또는 Mock 컴포넌트

#### `posts/[id]` - 동적 라우트
- **문제**: 외부 API + 동적 파라미터
- **원인**: MSW 핸들러 부재 + 라우트 파라미터 전달 문제
- **해결 가능**: MSW + 파라미터 모킹

### 3. Next.js 전용 기능 (3개)

#### `meta` - Metadata API
- **문제**: Next.js Metadata API 사용
- **원인**: Storybook에서 Next.js 메타데이터 시스템 미지원
- **해결 어려움**: Next.js 런타임 기능

#### `locale` - 국제화
- **문제**: `process.env.NEXT_LOCALE` 환경변수 의존
- **원인**: Storybook 환경에서 Next.js 환경변수 접근 제한
- **해결 가능**: 환경변수 모킹

#### `search` - 검색 파라미터
- **문제**: `searchParams` props 의존
- **원인**: Storybook에서 Next.js searchParams 전달 문제
- **해결 가능**: Props 모킹

### 4. React 고급 기능 (1개)

#### `stream` - Suspense 스트리밍
- **문제**: React 18 Suspense + 스트리밍 사용
- **원인**: Storybook의 제한적 스트리밍 지원
- **해결 어려움**: React 18 고급 기능

### 5. RSC 지원 문제 (3개)

#### `db` - 데이터베이스 시뮬레이션
- **문제**: 비동기 서버 컴포넌트 렌더링 실패
- **원인**: Storybook RSC 지원 한계
- **해결 가능**: Mock 컴포넌트

#### `error` - 에러 처리
- **문제**: 랜덤 에러 발생 로직의 비동기 처리
- **원인**: Storybook RSC 지원 한계
- **해결 가능**: Mock 컴포넌트

#### `shared` - 데이터 공유
- **문제**: 비동기 데이터 공유 패턴
- **원인**: Storybook RSC 지원 한계
- **해결 가능**: Mock 컴포넌트

## 해결 전략

### 1. Mock 컴포넌트 접근법
```typescript
// 성공 예시: async-page.stories.tsx
function MockAsyncDataComponent() {
  const data = {
    title: '샘플 게시물 제목',
    body: '샘플 내용'
  }
  
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}
```

### 2. MSW 핸들러 접근법
```typescript
// 성공 예시: nested-page.stories.tsx
const meta = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://api.example.com/data', () => {
          return HttpResponse.json({ data: 'mock' })
        })
      ]
    }
  }
}
```

## 결론

### Storybook + RSC 제약사항

1. **서버 전용 API**: Node.js 파일시스템, Server Actions 등은 근본적으로 불가능
2. **외부 의존성**: API 호출은 MSW로 모킹 필요
3. **Next.js 런타임**: Metadata API, 환경변수 등은 제한적 지원
4. **고급 React 기능**: Suspense 스트리밍 등은 부분적 지원

### 권장사항

1. **단순한 RSC**: 기본적인 서버 컴포넌트는 잘 작동
2. **Mock 우선**: 복잡한 로직은 Mock 컴포넌트로 대체
3. **MSW 활용**: 외부 API는 MSW로 핸들링
4. **기능별 분리**: 서버 전용 기능과 UI 로직 분리

## 기술적 한계

Storybook 9의 `experimentalRSC`는 여전히 실험적 기능으로, 프로덕션 수준의 RSC 테스팅에는 한계가 있습니다. 특히 서버 환경 특화 기능들은 브라우저 기반 Storybook 환경에서 근본적으로 제약이 있습니다.

---

*테스트 일시: 2025-01-10*  
*환경: Storybook 9.1.5 + Next.js 15.5.2 + React 19.1.0*