"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
    setSolutionsOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-bold text-lg tracking-tight" onClick={closeMenu}>
          KCP <span className="text-signal">Holdings</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#about" className="hover:text-text transition-colors">
            회사 소개
          </a>
          <a href="#business" className="hover:text-text transition-colors">
            사업영역
          </a>
          <div className="group relative">
            <a href="/solutions/ai-wep" className="hover:text-text transition-colors">
              솔루션
            </a>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="w-48 rounded-md border border-border bg-panel p-1.5 shadow-xl">
                <a
                  href="/solutions/ai-wep"
                  className="block rounded px-3 py-2 text-sm text-muted transition-colors hover:bg-panel2 hover:text-text"
                >
                  AI-WEP
                </a>
                <a
                  href="/solutions/smartvault"
                  className="block rounded px-3 py-2 text-sm text-muted transition-colors hover:bg-panel2 hover:text-text"
                >
                  SmartVault
                </a>
              </div>
            </div>
          </div>
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

        <button
          type="button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-text md:hidden"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M2 2l14 14M16 2L2 16" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M2 4.5h14M2 9h14M2 13.5h14" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border/60 bg-bg/95 px-6 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-1 text-sm">
            <a
              href="#about"
              onClick={closeMenu}
              className="rounded px-2 py-2.5 text-muted transition-colors hover:bg-panel2 hover:text-text"
            >
              회사 소개
            </a>
            <a
              href="#business"
              onClick={closeMenu}
              className="rounded px-2 py-2.5 text-muted transition-colors hover:bg-panel2 hover:text-text"
            >
              사업영역
            </a>

            <div>
              <button
                type="button"
                onClick={() => setSolutionsOpen((v) => !v)}
                aria-expanded={solutionsOpen}
                className="flex w-full items-center justify-between rounded px-2 py-2.5 text-muted transition-colors hover:bg-panel2 hover:text-text"
              >
                솔루션
                <span className={`transition-transform ${solutionsOpen ? "rotate-180" : ""}`}>⌄</span>
              </button>
              {solutionsOpen && (
                <div className="ml-2 mt-1 flex flex-col gap-1 border-l border-border pl-3">
                  <a
                    href="/solutions/ai-wep"
                    onClick={closeMenu}
                    className="rounded px-2 py-2 text-muted transition-colors hover:text-text"
                  >
                    AI-WEP
                  </a>
                  <a
                    href="/solutions/smartvault"
                    onClick={closeMenu}
                    className="rounded px-2 py-2 text-muted transition-colors hover:text-text"
                  >
                    SmartVault
                  </a>
                </div>
              )}
            </div>

            <a
              href="#group"
              onClick={closeMenu}
              className="rounded px-2 py-2.5 text-muted transition-colors hover:bg-panel2 hover:text-text"
            >
              그룹사
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-md bg-accent px-4 py-2.5 text-center text-text transition-colors hover:bg-accent/90"
            >
              문의하기
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
