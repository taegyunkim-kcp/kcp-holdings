// KCP Holdings 자체 사업 + 그룹사(Smart-E, Smart-X) 협업 사업을 아우르는 사업영역
export const businessDomains = [
  {
    tag: "AX STRATEGY",
    owner: "KCP",
    title: "AX 사업·상품 기획 컨설팅",
    description:
      "AI 전환(AX) 시대에 필요한 사업모델과 상품을 함께 설계합니다. 아이디어 단계부터 실행 로드맵까지, 지식 기반의 전략 컨설팅을 제공합니다.",
    points: ["AX 사업모델 설계", "신규 상품 기획", "실행 로드맵 수립"],
  },
  {
    tag: "AI DATACENTER",
    owner: "KCP",
    title: "AI 데이터센터 구축 컨설팅·엔지니어링",
    description:
      "AI 연산에 특화된 데이터센터 구축을 컨설팅부터 엔지니어링까지 지원합니다. 입지·설계 검토부터 운영 효율화까지 전 과정을 다룹니다.",
    points: ["AI 데이터센터 구축 컨설팅", "엔지니어링 및 설계 검토", "운영 효율화 전략"],
  },
  {
    tag: "STARTUP",
    owner: "KCP",
    title: "스타트업 컨설팅·투자",
    description:
      "기술 기반 스타트업을 대상으로 사업화 컨설팅과 투자를 함께 진행합니다. 지식과 자본을 연결해 초기 기업의 성장을 지원합니다.",
    points: ["사업화·성장 전략 컨설팅", "초기 투자 연계", "그룹사 협업 기회 제공"],
  },
  {
    tag: "ENERGY",
    owner: "KCP × Smart-E",
    title: "xEMS 에너지관리솔루션",
    description:
      "데이터센터를 포함한 다양한 현장의 에너지 사용을 관리·최적화하는 xEMS를 Smart-E와 함께 개발합니다.",
    points: ["에너지 사용 모니터링", "운영 최적화", "데이터 기반 관리"],
  },
  {
    tag: "SMART FARM/FACTORY",
    owner: "Smart-X",
    title: "스마트팜·스마트팩토리 IoT",
    description:
      "센서 단말부터 통신, 모니터링, 제어까지 end-to-end로 개발합니다. 여러 탐지 노드를 통합해 실시간으로 분석하고 현장을 제어합니다.",
    points: ["IoT 단말 및 센서 개발", "다중 노드 통신 통합", "실시간 모니터링·제어"],
  },
  {
    tag: "ACCESS CONTROL",
    owner: "Smart-X",
    title: "IoT 기반 군 스마트폰 보관함",
    description:
      "NFC/RFID로 보관자를 식별하고 잠금장치를 원격으로 모니터링·제어합니다. 군부대, 학원 등 스마트폰 사용시간 제한이 필요한 환경에 적용합니다.",
    points: ["NFC 기반 보관자 식별", "원격 모니터링", "원격 잠금·해제 제어"],
  },
];

// 그룹사(자회사) 소개
export const groupCompanies = [
  {
    code: "Smart-E",
    tag: "환경 · 에너지",
    description:
      "환경·에너지 분야 전문 자회사로, KCP와 함께 xEMS 등 에너지관리솔루션을 개발합니다. 데이터센터를 비롯한 다양한 현장의 에너지 효율을 높이는 것이 목표입니다.",
    focus: ["xEMS 에너지관리솔루션", "데이터센터 에너지 최적화", "환경 데이터 모니터링"],
  },
  {
    code: "Smart-X",
    tag: "IoT Everything",
    description:
      "IoT 전 영역을 다루는 자회사로, 스마트팜·스마트팩토리 IoT 단말부터 모니터링 시스템, 군부대 스마트폰 보관함 솔루션까지 개발·사업화를 추진합니다.",
    focus: ["스마트팜·스마트팩토리 IoT", "IoT 모니터링·제어 시스템", "군 스마트폰 보관함 솔루션"],
  },
];
