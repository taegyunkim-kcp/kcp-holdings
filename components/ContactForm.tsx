"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Resend / Formspree 등 이메일 연동 서비스에 실제 전송 로직 연결
    setStatus("sent");
  }

  return (
    <section id="contact" className="section-divider py-24">
      <div className="mx-auto max-w-2xl px-6">
        <p className="eyebrow mb-4">CONTACT</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-10">문의하기</h2>

        {status === "sent" ? (
          <div className="rounded-lg border border-signal/40 bg-panel p-6 text-sm text-muted">
            문의가 접수되었습니다. 빠르게 답변드리겠습니다.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono text-muted mb-2" htmlFor="name">
                이름 / 회사명
              </label>
              <input
                id="name"
                required
                className="w-full rounded-md border border-border bg-panel px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted mb-2" htmlFor="email">
                이메일
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-md border border-border bg-panel px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted mb-2" htmlFor="message">
                문의 내용
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full rounded-md border border-border bg-panel px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              문의 보내기
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
