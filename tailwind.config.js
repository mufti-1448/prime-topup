/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        background: "#05070D",
        primary: "#1677FF",
        "on-surface": "#e5e2e2",
        "on-surface-variant": "#c6c6cb",
        "surface-container-lowest": "#0e0e0f",
        "surface-container": "#1a1a2c",
        "surface-container-high": "#232340",
        "surface-bright": "#2a2a4a",
        "on-primary": "#ffffff",
        "on-primary-container": "#d3e3ff",
        "primary-container": "#004a9e",
        outline: "#444466",
        "outline-variant": "#2a2a44",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "64px",
          { lineHeight: "72px", fontWeight: "700", letterSpacing: "-0.02em" },
        ],
        "display-xl-mobile": [
          "40px",
          { lineHeight: "48px", fontWeight: "700" },
        ],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px" }],
        "body-md": ["16px", { lineHeight: "24px" }],
        "label-md": [
          "14px",
          { lineHeight: "20px", fontWeight: "600", letterSpacing: "0.05em" },
        ],
        "price-display": ["20px", { lineHeight: "24px", fontWeight: "700" }],
      },
      spacing: {
        "section-padding": "120px",
        "section-padding-mobile": "64px",
        gutter: "24px",
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(22, 119, 255, 0.4)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(22, 119, 255, 0.8)",
            transform: "scale(1.05)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
