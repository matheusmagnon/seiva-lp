import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Direção F — paleta própria (não confundir com shadcn)
        brand: {
          DEFAULT: "#4763B8",
          dark: "#33509E",
          soft: "#E9EDF8",
          ink: "#33427C",
        },
        ink: {
          DEFAULT: "#26303B",
          2: "#5F6B78",
          3: "#93A0AD",
        },
        surface: {
          bg: "#F3F5F9",
          side: "#EBEEF4",
          card: "#FFFFFF",
        },
        line: {
          DEFAULT: "#E6EAF0",
          hair: "#EFF2F6",
        },
        good: {
          DEFAULT: "#2E7D42",
          soft: "#E4F1E7",
        },
        warn: {
          DEFAULT: "#96660D",
          soft: "#F7EDD8",
        },
        crit: {
          DEFAULT: "#B3362B",
          soft: "#F9E7E4",
        },
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        caption: ["var(--text-caption)", { lineHeight: "1.4" }],
        small: ["var(--text-small)", { lineHeight: "1.5" }],
        body: ["var(--text-body)", { lineHeight: "1.6" }],
        lead: ["var(--text-lead)", { lineHeight: "1.6" }],
        h4: ["var(--text-h4)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["var(--text-h3)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h2: ["var(--text-h2)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h1: ["var(--text-h1)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
