# KCP Holdings 회사 홈페이지 프로젝트

## 프로젝트 개요
주식회사 케이씨피홀딩스(KCP Holdings Co.,Ltd.)의 공식 회사 소개 웹사이트.
지식 컨설팅과 자회사 엔지니어링을 연결하는 지주회사로서의 신뢰감과 전문성을 전달하는 것이 목표.

## 회사 정보
- **회사명**: 주식회사 케이씨피홀딩스 (KCP Holdings Co.,Ltd.)
- **KCP의 의미**: Knowledge Consulting Platform
- **회사 형태**: 지주회사(Holdings). 자체 사업(컨설팅·기획·투자)과 자회사(엔지니어링·솔루션 개발)로 구성

## 그룹 구조

```
KCP Holdings (지주회사, Knowledge Consulting Platform)
  ├─ 자체 사업: AX 사업/상품 기획, 스타트업 컨설팅·투자,
  │            AI 데이터센터 구축 컨설팅·엔지니어링
  │
  ├─ Smart-E (자회사) — 환경·에너지
  │     └ xEMS 등 에너지관리솔루션 (KCP와 공동 개발)
  │
  └─ Smart-X (자회사) — IoT Everything
        └ 스마트팜/스마트팩토리 IoT, 군부대 스마트폰 보관함 등
```

## 핵심 사업영역 (홈페이지에 소개할 6개 사업)

### KCP 자체 사업
1. **AX 사업·상품 기획 컨설팅** — AI 전환(AX) 시대 사업모델/상품 설계
2. **AI 데이터센터 구축 컨설팅·엔지니어링** — 입지·설계 검토, 운영 효율화
3. **스타트업 컨설팅·투자** — 기술 기반 스타트업 사업화 컨설팅 및 투자

### KCP × Smart-E
4. **xEMS 에너지관리솔루션** — 데이터센터 등 에너지 사용 모니터링·최적화

### Smart-X
5. **스마트팜·스마트팩토리 IoT** — 센서 단말~통신~모니터링~제어 end-to-end
   - 우노보드(Arduino Uno) 센서 데이터 수집, RS485 다중 노드 통합
6. **IoT 기반 군 스마트폰 보관함** — NFC/RFID 보관자 식별, 원격 잠금·모니터링

## 디자인 방향
- **톤앤매너**: 기술적이고 신뢰감 있는 느낌, 지주회사다운 안정감
- **컬러**: 다크/블루 계열 (딥 네이비 #0B1120, 블루 포인트 #2F6FED, 시그널 시안 #22D3EE)
- **무드 레퍼런스**: 산업용 소프트웨어, B2B 기술 지주회사 사이트

## 사이트 구조
1. Header — 로고 + 회사소개/사업영역/그룹사/문의 네비게이션
2. Hero — 슬로건(지식에서 시스템까지, AX 시대를 설계하는 그룹)
3. About — KCP = Knowledge Consulting Platform 의미, 지주회사 포지셔닝
4. 사업영역(Business Domains) — 6개 카드, 각 카드에 주체(KCP/Smart-E/Smart-X) 라벨 표기
5. 그룹사(Group Companies) — Smart-E, Smart-X 소개 카드
6. 협력사(Partners) — 외부 협력사 소개 카드 (그룹사와 동일한 카드 형태), 카드 클릭 시 회사 URL로 이동(URL 없는 경우 클릭 비활성화). 현재 등록: 그리드위즈(코스닥 상장, 에너지 IT), 가온글로벌(AI 인프라 솔루션), 삼성파워텍(수배전반·중전기기), 코오롱글로벌(종합 건설), 맥데이터(IT 인프라 모니터링), 지산그룹(데이터센터·물류센터 개발)
7. 문의하기 (폼)
8. Footer — 회사 정보 + 그룹사 정보 병기

## 기술 스택
- **프레임워크**: Next.js (React) + TypeScript
- **스타일링**: Tailwind CSS
- **배포**: Vercel
- **문의 폼**: Vercel 서버리스 함수 또는 Resend/Formspree 등 이메일 연동 서비스

## 개발 원칙
- 섹션 단위로 개발하고 매 단계 브라우저에서 확인 후 다음 단계로 진행
- 컴포넌트는 재사용 가능하게 분리 (Hero, BusinessDomains, GroupCompanies, PartnerCompanies, ContactForm 등)
- 반응형 디자인 필수 (모바일/태블릿/데스크톱)
- 코드는 TypeScript로 타입 안정성 확보
- 사업영역/그룹사 데이터는 `lib/content.ts`에서 중앙 관리

## 참고 사항
- 이 프로젝트는 바이브 코딩 워크플로우를 익히기 위한 첫 실습 프로젝트이기도 함
- 여기서 익힌 Next.js + Tailwind 구조와 CLAUDE.md 작성 패턴은 향후 스마트팜 대시보드, EMS 모니터링 UI, Smart-E/Smart-X 서브 사이트 등 다른 프로젝트에도 재사용할 예정
- 향후 Smart-E, Smart-X 각각의 서브페이지(/smart-e, /smart-x) 분리 가능성 고려
