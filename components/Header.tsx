export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          KCP <span className="text-signal">Holdings</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#about" className="hover:text-text transition-colors">
            회사 소개
          </a>
          <a href="#business" className="hover:text-text transition-colors">
            사업영역
          </a>
          <a href="#group" className="hover:text-text transition-colors">
            그룹사
          </a>
          <a
            href="#contact"
            className="rounded-md bg-accent px-4 py-2 text-text hover:bg-accent/90 transition-colors"
          >
            문의하기
          </a>
        </nav>
      </div>
    </header>
  );
}
