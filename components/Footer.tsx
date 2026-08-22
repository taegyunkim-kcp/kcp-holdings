export default function Footer() {
  return (
    <footer className="section-divider py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted font-mono">
        <p>주식회사 케이씨피홀딩스 (KCP Holdings Co.,Ltd.)</p>
        <p>© {new Date().getFullYear()} KCP Holdings. All rights reserved.</p>
      </div>
    </footer>
  );
}
