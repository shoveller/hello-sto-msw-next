# 추천 명령어

## 개발 서버 실행
```bash
pnpm dev
```
- Turbopack을 사용한 개발 서버 실행
- 기본 포트: 3000

## 빌드 관련
```bash
pnpm build        # 프로덕션 빌드 (Turbopack)
pnpm start        # 프로덕션 서버 실행
```

## 코드 품질 검사 및 포맷팅
```bash
pnpm type:check   # TypeScript 타입 검사
pnpm prettier     # Prettier 포맷팅
pnpm eslint       # ESLint 검사 및 수정
pnpm format       # 전체 포맷팅 (type:check + prettier + eslint)
```

## API 클라이언트 생성
```bash
pnpm api
```
- PokeAPI OpenAPI 스펙으로부터 TypeScript API 클라이언트 자동 생성
- 생성 위치: `./src/api/Api.ts`

## Git 관련
```bash
pnpm prepare      # Husky Git hooks 설정
```

## 시스템 명령어 (Darwin)
- `ls`: 파일 목록
- `find`: 파일 검색
- `grep`: 텍스트 검색
- `cd`: 디렉터리 이동
- `git`: Git 버전 관리