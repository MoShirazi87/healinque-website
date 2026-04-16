import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Healinque Brand Colors — Dark Theme
        navy: {
          deep: "#0a1628",
          DEFAULT: "#0a1628",
          light: "#1a2d4a",
          medium: "#0f1f38",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#d4b54a",
          dark: "#a8871f",
          muted: "rgba(201, 162, 39, 0.2)",
          subtle: "rgba(201, 162, 39, 0.08)",
        },
        cream: {
          DEFAULT: "#FAF8F5",
          dark: "#f0ece6",
          light: "#fdfcfb",
        },
        taupe: {
          DEFAULT: "#8b7355",
          light: "#a08b6d",
          dark: "#6b5a45",
        },
        surface: {
          DEFAULT: "#0d1b2e",
          light: "#111f35",
          lighter: "#162742",
          card: "#0f1f38",
          elevated: "#1a2d4a",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 5vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 4.5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.2" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.3" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "12px",
      },
      boxShadow: {
        'soft': '0px 4px 12px rgba(0,0,0,0.08), 0px 2px 6px rgba(0,0,0,0.04)',
        'elegant': '0px 8px 30px rgba(0,0,0,0.12)',
        'glow-gold': '0 0 20px rgba(201,162,39,0.15), 0 0 40px rgba(201,162,39,0.05)',
        'glow-gold-strong': '0 0 30px rgba(201,162,39,0.25), 0 0 60px rgba(201,162,39,0.1)',
        'card': '0 18px 20px rgba(0,0,0,0.25)',
        'card-hover': '0 24px 40px rgba(0,0,0,0.3), 0 0 20px rgba(201,162,39,0.08)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 162, 39, 0.3)" },
          "50%": { boxShadow: "0 0 20px 5px rgba(201, 162, 39, 0.1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-up": "slide-up 0.6s cubic-bezier(0.77, 0, 0.175, 1)",
        "slide-down": "slide-down 0.6s cubic-bezier(0.77, 0, 0.175, 1)",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-in-left": "slide-in-left 0.3s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "float": "float 3s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "shimmer": "shimmer 2s infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-elegant': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(180deg, #0a1628 0%, #0d1b2e 100%)',
        'gradient-card': 'linear-gradient(135deg, #0f1f38 0%, #162742 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
