import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Farmhouse Design System Palette
        farmhouse: {
          river: {
            DEFAULT: "#2F5748",
            light: "#3D6F5C",
            dark: "#213F34",
            hover: "#26483B",
          },
          slate: {
            DEFAULT: "#43504C",
            light: "#5A6A65",
            dark: "#2D3633",
            subtle: "#E4E8E6",
          },
          wood: {
            DEFAULT: "#888958",
            warm: "#B88958",
            light: "#CDB38B",
            dark: "#6F6F45",
          },
          rust: {
            DEFAULT: "#9B4D35",
            light: "#B85C40",
            dark: "#7A3B28",
          },
          cream: {
            DEFAULT: "#F4EFE4",
            light: "#FAF7F0",
            paper: "#F7F3EB",
            dark: "#E8DFC8",
            border: "#E2D9C8",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        scoop: "1.25rem",
        "scoop-lg": "1.75rem",
        "scoop-xl": "2.25rem",
      },
      boxShadow: {
        paper: "0 1px 3px 0 rgba(67, 80, 76, 0.08), 0 1px 2px -1px rgba(67, 80, 76, 0.05)",
        card: "0 4px 6px -1px rgba(47, 87, 72, 0.06), 0 2px 4px -2px rgba(47, 87, 72, 0.04)",
        lifted: "0 10px 25px -5px rgba(47, 87, 72, 0.08), 0 8px 10px -6px rgba(47, 87, 72, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
