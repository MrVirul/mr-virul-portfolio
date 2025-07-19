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
                primary: '#6366F1', // Modern Indigo
                accent: '#F472B6', // Vibrant Pink
                secondary: '#06D6A0', // Teal Green
                background: '#0F0F23', // Deep Navy
                surface: '#1A1B3A', // Rich Dark Blue
                text: '#F8FAFC', // Pure White
                highlight: '#38BDF8', // Sky Blue
                muted: '#94A3B8', // Slate Gray
                glass: 'rgba(255, 255, 255, 0.05)',
                neon: '#00FFF7', // Neon Cyan
            },
            fontFamily: {
                inter: ['var(--font-inter)', 'sans-serif'],
                sora: ['var(--font-sora)', 'sans-serif'],
            },
            borderRadius: {
                '2xl': '1.5rem',
                '3xl': '2rem',
                'glass': '2rem',
                'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
            },
            boxShadow: {
                glass: '0 8px 32px 0 rgba(99, 102, 241, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                neon: '0 0 20px rgba(0, 255, 247, 0.3), 0 0 40px rgba(0, 255, 247, 0.1)',
                elevated: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.02)',
                neu: 'inset 5px 5px 10px rgba(0, 0, 0, 0.2), inset -5px -5px 10px rgba(255, 255, 255, 0.02)',
            },
            backdropBlur: {
                glass: '16px',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'blob': 'blob 7s infinite',
                'gradient': 'gradient 3s ease infinite',
                'slide-up': 'slideUp 0.8s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                glow: {
                    'from': { boxShadow: '0 0 20px #06D6A0' },
                    'to': { boxShadow: '0 0 30px #06D6A0, 0 0 40px #06D6A0' }
                },
                blob: {
                    '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                    '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' }
                },
                slideUp: {
                    'from': { transform: 'translateY(30px)', opacity: '0' },
                    'to': { transform: 'translateY(0)', opacity: '1' }
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'mesh-gradient': 'linear-gradient(45deg, #6366F1, #F472B6, #06D6A0, #38BDF8)',
            },
        },
    },
    plugins: [],
};