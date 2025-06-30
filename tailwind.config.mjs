/**@type {import ('tailwindcss').config}*/
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                lightHover: "#f3f4f6",  // Changed to camelCase
                darkhover: "#111827",
                darktheme: "#111827",
            },
            fontFamily: {
                'Fira_Code': ['var(--font-fira-code)', 'monospace'],
                'Ovo': ['var(--font-ovo)', 'serif'],
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
        },
    },
    plugins: [],
};