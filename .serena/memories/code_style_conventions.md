# 코드 스타일 및 컨벤션

## ESLint 규칙
### 함수형 프로그래밍 스타일
- `let`, `var` 금지 → `const` 사용 필수
- 모든 루프문 금지 (for, while 등)
- 배열/객체 변이 메서드 경고
- 파라미터 재할당 금지

### 코드 품질
- 최대 중첩 깊이: 2단계
- Interface 금지 → type 사용 필수
- 삼항 연산자 금지 → if문 사용
- 변수 shadowing 금지
- 사용하지 않는 import 자동 제거

## Prettier 설정
- 세미콜론 없음
- 싱글 쿼트 사용
- 탭 너비: 2
- 트레일링 컴마 없음
- LF 줄바꿈

## Import 순서
1. React 관련
2. Next.js 관련
3. 빌트인 모듈
4. 서드파티 모듈
5. CSS/SCSS 파일
6. 로컬 모듈 (상대 경로)

## 네이밍 컨벤션
- 함수/변수: camelCase
- 컴포넌트: PascalCase
- 상수: UPPER_SNAKE_CASE (필요시)
- 타입: PascalCase