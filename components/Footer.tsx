export default function Footer() {
  return (
    <footer className="section-divider py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-4 text-xs text-muted font-mono">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <p>주식회사 케이씨피홀딩스 (KCP Holdings Co.,Ltd.)</p>
          <p>깅기도 성남시 분당구 하오개로 358-5</p>
          <p>© 2020 KCP Holdings. All rights reserved.</p>
        </div>
        <p className="text-muted/70">Group Companies — Smart-E (환경·에너지) · Smart-X (IoT Everything)</p>
      </div>
    </footer>
  );
}
