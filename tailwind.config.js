/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary": "#4d2600",
        "surface-dim": "#131313",
        "on-secondary-fixed": "#2f1500",
        "inverse-surface": "#e5e2e1",
        "outline-variant": "#3c494e",
        "on-tertiary": "#002e68",
        "surface-container-low": "#1c1b1b",
        "surface-container-highest": "#353534",
        "on-surface": "#e5e2e1",
        "tertiary-fixed-dim": "#adc7ff",
        "on-background": "#e5e2e1",
        "tertiary-container": "#a7c3ff",
        "secondary-container": "#fd8b00",
        "on-primary-fixed-variant": "#004e5f",
        "primary-fixed": "#b4ebff",
        "inverse-primary": "#00677e",
        "outline": "#859398",
        "surface": "#131313",
        "surface-container-high": "#2a2a2a",
        "primary-fixed-dim": "#3cd7ff",
        "on-tertiary-fixed-variant": "#004493",
        "tertiary": "#d2dfff",
        "on-tertiary-fixed": "#001a41",
        "error-container": "#93000a",
        "surface-container-lowest": "#0e0e0e",
        "on-secondary-fixed-variant": "#6e3900",
        "tertiary-fixed": "#d8e2ff",
        "on-error": "#690005",
        "on-secondary-container": "#603100",
        "on-primary": "#003642",
        "on-error-container": "#ffdad6",
        "secondary-fixed": "#ffdcc3",
        "secondary": "#ffb77d",
        "surface-container": "#201f1f",
        "on-tertiary-container": "#004da4",
        "primary-container": "#00d4ff",
        "on-primary-container": "#00586b",
        "surface-variant": "#353534",
        "on-primary-fixed": "#001f27",
        "primary": "#a8e8ff",
        "inverse-on-surface": "#313030",
        "on-surface-variant": "#bbc9cf",
        "background": "#131313",
        "surface-tint": "#3cd7ff",
        "error": "#ffb4ab",
        "surface-bright": "#3a3939",
        "secondary-fixed-dim": "#ffb77d"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
