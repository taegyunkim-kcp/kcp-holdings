export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 bg-grid-fade">
      <NodeNetwork />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-5">SENSOR TO SYSTEM</p>
        <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.1] max-w-3xl">
          센서에서 제어까지,
          <br />
          하나로 연결하는 <span className="text-accent">IoT</span> 솔루션
        </h1>
        <p className="mt-6 max-w-xl text-muted text-base md:text-lg">
          생활속 IoT Device, 스마트팜, 스마트 팩토리, 데이터센터 에너지까지 — 흩어진 데이터를 하나의
          네트워크로 모아 실시간으로 분석하고 제어합니다.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#solutions"
            className="rounded-md bg-accent px-6 py-3 text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            솔루션 살펴보기
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-6 py-3 text-sm font-medium text-muted hover:text-text hover:border-muted transition-colors"
          >
            문의하기
          </a>
        </div>
      </div>
    </section>
  );
}

function NodeNetwork() {
  // RS485 버스 토폴로지를 연상시키는 노드-라인 배경: 메인 버스 라인에 여러 노드가 연결된 구조
  const nodes = [
    { x: 140, y: 90 },
    { x: 340, y: 60 },
    { x: 560, y: 110 },
    { x: 780, y: 70 },
    { x: 980, y: 100 },
  ];
  return (
    <svg
      className="absolute inset-x-0 top-0 w-full h-[280px] opacity-70"
      viewBox="0 0 1120 220"
      fill="none"
      aria-hidden="true"
    >
      <line x1="80" y1="150" x2="1040" y2="150" className="node-line" strokeWidth="1.5" />
      {nodes.map((n, i) => (
        <g key={i}>
          <line x1={n.x} y1={150} x2={n.x} y2={n.y} className="node-line" strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r="3.5" className="node-dot pulse-dot" style={{ animationDelay: `${i * 0.4}s` }} />
          <circle cx={n.x} cy={150} r="2" className="node-dot" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}
