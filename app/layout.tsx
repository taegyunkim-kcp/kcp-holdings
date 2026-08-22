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
    "Knowledge Consulting Platform. AX 사업·상품 기획, AI 데이터센터 구축 컨설팅·엔지니어링, 스타트업 컨설팅·투자. 자회사 Smart-E(환경·에너지), Smart-X(IoT Everything)와 함께 xEMS, 스마트팜·팩토리 IoT, 군 스마트폰 보관함 솔루션을 개발합니다.",
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
