import formsPlugin from '@tailwindcss/forms';
import containerQueriesPlugin from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#f7fafc",
        "error-container": "#ffdad6",
        "secondary-fixed-dim": "#bcc7dd",
        "primary-fixed-dim": "#adc7f7",
        "on-secondary-fixed": "#111c2c",
        "surface-tint": "#455f88",
        "on-tertiary-fixed": "#241a00",
        "on-tertiary-fixed-variant": "#574500",
        "surface": "#f7fafc",
        "tertiary-container": "#cba72f",
        "primary": "#002045",
        "error": "#ba1a1a",
        "on-background": "#181c1e",
        "on-secondary-fixed-variant": "#3c475a",
        "on-tertiary-container": "#4e3d00",
        "on-primary": "#ffffff",
        "surface-bright": "#f7fafc",
        "secondary-container": "#d5e0f7",
        "surface-variant": "#e0e3e5",
        "surface-container-highest": "#e0e3e5",
        "surface-dim": "#d7dadc",
        "secondary-fixed": "#d8e3fa",
        "on-primary-container": "#86a0cd",
        "surface-container-high": "#e5e9eb",
        "on-error-container": "#93000a",
        "inverse-surface": "#2d3133",
        "on-error": "#ffffff",
        "on-secondary-container": "#586377",
        "on-secondary": "#ffffff",
        "on-surface-variant": "#43474e",
        "tertiary-fixed": "#ffe088",
        "outline-variant": "#c4c6cf",
        "on-surface": "#181c1e",
        "surface-container-low": "#f1f4f6",
        "secondary": "#545f72",
        "on-tertiary": "#ffffff",
        "outline": "#74777f",
        "inverse-primary": "#adc7f7",
        "primary-container": "#1a365d",
        "surface-container-lowest": "#ffffff",
        "inverse-on-surface": "#eef1f3",
        "tertiary": "#735c00",
        "tertiary-fixed-dim": "#e9c349",
        "primary-fixed": "#d6e3ff",
        "on-primary-fixed-variant": "#2d476f",
        "on-primary-fixed": "#001b3c",
        "surface-container": "#ebeef0"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      }
    },
  },
  plugins: [
    formsPlugin,
    containerQueriesPlugin
  ],
};
