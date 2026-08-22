export default function About() {
  return (
    <section id="about" className="section-divider py-24">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="eyebrow mb-4">ABOUT US</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl">
            하드웨어부터 소프트웨어까지,
            <br />
            직접 설계하고 공급합니다
          </h2>
        </div>
        <div className="text-muted leading-relaxed space-y-4">
          <p>
            케이씨피홀딩스는 센서 하드웨어 설계부터 통신 프로토콜, 실시간 분석 서버,
            제어·모니터링 인터페이스까지 전 과정을 자체적으로 개발하는 기술 기업입니다.
          </p>
          <p>
            스마트팜의 센서 노드부터 데이터센터의 에너지 시스템까지, 서로 다른
            현장이지만 같은 원칙으로 접근합니다 — 데이터를 정확히 모으고, 실시간으로
            판단하고, 안정적으로 제어한다는 원칙입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
