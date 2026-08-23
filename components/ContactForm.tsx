"use client";

import { useState } from "react";

// Google Apps Script 배포 후 발급받은 웹 앱 URL을 여기에 붙여넣으세요.
// (구글 시트 > 확장 프로그램 > Apps Script > 배포 > 새 배포 > 웹 앱)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzXeODug2GRHOybaks1XP0u6IHnCh3CdlJ6Gz1ISnZXzbU-WlsjIslsMegzfigBfrQSPw/exec";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Apps Script 웹 앱은 CORS 프리플라이트를 지원하지 않으므로
      // no-cors 모드로 요청을 보낸다. 응답 본문은 읽을 수 없지만
      // 요청 자체는 정상적으로 시트에 기록된다.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });
      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
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
                name="name"
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
                name="email"
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
                name="message"
                required
                rows={5}
                className="w-full rounded-md border border-border bg-panel px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "전송 중..." : "문의 보내기"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-400">
                전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
