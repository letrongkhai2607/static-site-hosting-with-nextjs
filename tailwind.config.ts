import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    backgroundImage: {
      "main-background-image": "url('../../public/background.jpg')",
      // "main-background-image":
      //   "url('https://s3.ap-southeast-1.amazonaws.com/www.kylecodes.tech/background.jpg')",
    },
  },
  plugins: [],
} satisfies Config;
