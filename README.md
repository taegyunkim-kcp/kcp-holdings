# KCP Holdings 홈페이지

## 로컬에서 실행하기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속

## 배포 (Vercel)

1. GitHub 저장소에 push
2. https://vercel.com 에서 저장소 import
3. 별도 설정 없이 자동 배포됨 (Next.js 프로젝트 자동 인식)

## 다음에 채워야 할 것들

- `components/ContactForm.tsx` — 실제 이메일 전송 로직 연결 (Resend, Formspree 등)
- `public/` — 회사 로고, 솔루션 관련 이미지/다이어그램 추가
- 레퍼런스/실적 섹션 (필요 시 추가)
- 사업자등록번호, 주소 등 Footer 정보 보강

## 프로젝트 구조

```
app/            Next.js App Router 페이지
components/     섹션별 컴포넌트 (Header, Hero, Solutions, About, ContactForm, Footer)
lib/content.ts  솔루션 소개 콘텐츠 데이터
CLAUDE.md       프로젝트 컨텍스트 문서 (Claude Code가 참고)
```
