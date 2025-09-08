# 작업 완료 체크리스트

## 코드 작성 후 필수 실행 명령어
1. **타입 검사**: `pnpm type:check`
2. **포맷팅**: `pnpm prettier`  
3. **린팅**: `pnpm eslint`
4. **통합 검사**: `pnpm format` (위 3개를 순차 실행)

## 코드 품질 확인 사항
- [ ] `const` 사용 (let, var 금지)
- [ ] 루프문 사용하지 않음 (map, filter, reduce 등 사용)
- [ ] interface 대신 type 사용
- [ ] 삼항 연산자 대신 if문 사용
- [ ] 중첩 깊이 2단계 이하 유지
- [ ] 사용하지 않는 import 제거
- [ ] 변수 shadowing 없음

## 빌드 및 배포 전 확인
- [ ] `pnpm build` 성공적으로 완료
- [ ] TypeScript 에러 없음
- [ ] ESLint 에러 없음
- [ ] 모든 테스트 통과 (테스트가 있는 경우)

## API 클라이언트 업데이트 시
- [ ] `pnpm api` 실행하여 최신 API 스펙 반영
- [ ] 생성된 `src/api/Api.ts` 파일 확인