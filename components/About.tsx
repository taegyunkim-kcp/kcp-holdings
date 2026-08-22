export default function About() {
  return (
    <section id="about" className="section-divider py-24">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="eyebrow mb-4">ABOUT US</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl">
            KCP는 Knowledge Consulting
            <br />
            Platform의 줄임말입니다
          </h2>
        </div>
        <div className="text-muted leading-relaxed space-y-4">
          <p>
            케이씨피홀딩스는 AX(AI Transformation) 시대에 필요한 사업·상품 기획과
            컨설팅을 중심으로, AI 데이터센터 구축 컨설팅·엔지니어링과 스타트업
            컨설팅·투자를 함께 진행하는 지주회사입니다.
          </p>
          <p>
            자회사 Smart-E(환경·에너지), Smart-X(IoT Everything)와 함께 xEMS
            에너지관리솔루션, 스마트팜·스마트팩토리 IoT, 군 스마트폰 보관함
            솔루션까지 — 지식(컨설팅)과 실행(엔지니어링)을 하나의 그룹으로
            연결합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
