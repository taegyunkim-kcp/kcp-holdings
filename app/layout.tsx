import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "KCP Holdings | 주식회사 케이씨피홀딩스",
  description:
    "스마트팜 IoT 제어·모니터링, NFC/RFID 보관함 잠금 시스템, 데이터센터 EMS까지 — 센서부터 제어까지 end-to-end로 개발·공급합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
