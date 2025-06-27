/**@type {import ('tailwindcss').config}*/
export default {
  content: [
    ".pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],theme:{
    extend: {
        colors: {
            lighthover: "#f3f4f6",
            darkhover: "#111827",
            darktheme: "#111827",     
        },
        fontFamily: {
    firaCode: ['var(--font-fira-code)', 'monospace'],
    ovo: ['var(--font-ovo)', 'serif'],
},
    },
  },plugin: [],
};