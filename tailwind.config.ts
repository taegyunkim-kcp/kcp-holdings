import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1120",
        panel: "#111827",
        panel2: "#0F172A",
        border: "#1E293B",
        accent: "#2F6FED",
        signal: "#22D3EE",
        text: "#E5E7EB",
        muted: "#94A3B8",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(47,111,237,0.18), transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
