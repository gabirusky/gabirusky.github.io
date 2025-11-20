tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        neon: {
          blue: "#00f3ff",
          purple: "#bd00ff",
          green: "#00ff9d",
        },
        dark: {
          bg: "#050505",
          card: "#101010",
        },
      },
      animation: {
        blob: "blob 7s infinite",
        glitch: "glitch 1s linear infinite",
      },
    },
  },
};
