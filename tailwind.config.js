/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Adding custom styles for the project
      backgroundImage: {
        'custom-pattern': "url('/path/to/image.jpg')", // Replace with your actual image path
      },
      colors: {
        customColor: "#123456", // Replace with your desired custom color
      },
    },
  },
  plugins: [
    daisyui, // Include daisyUI plugin
    // `@tailwindcss/line-clamp` is no longer needed as of Tailwind CSS v3.3
    // Remove it to eliminate the warning
  ],
  daisyui: {
    themes: [
      {
        // Customizing daisyUI themes (optional)
        myTheme: {
          primary: "#1e40af",
          secondary: "#9333ea",
          accent: "#14b8a6",
          neutral: "#64748b",
          "base-100": "#f3f4f6",
        },
      },
    ],
  },
};
