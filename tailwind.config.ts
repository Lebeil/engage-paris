import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Mulish', 'sans-serif'],
                heading: ['Didot', 'serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#1b357f',
                    light: '#2c4ba7',
                    dark: '#14295f',
                },
                secondary: {
                    DEFAULT: '#005693',
                    light: '#0078c8',
                    dark: '#00406d',
                },
                neutral: {
                    DEFAULT: '#bfc1be',
                    light: '#d8d9d6',
                    dark: '#a0a29f',
                }
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(to right, #1b357f, #005693)',
            },
        },
    },
    plugins: [],
};

export default config; 