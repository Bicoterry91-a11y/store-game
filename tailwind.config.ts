import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070A12",
        panel: "#0D1220",
        line: "#1D2638",
        cyanx: "#22D3EE",
        violetx: "#8B5CF6"
      }
    }
  },
  plugins: []
};
export default config;
