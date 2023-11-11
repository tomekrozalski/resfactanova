import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			black: 'rgb(var(--color-black) / <alpha-value>)',
			white: '#fff',
			red: 'rgb(var(--color-red) / <alpha-value>)',
			blue: 'rgb(var(--color-blue) / <alpha-value>)',
			yellow: '#ebead2',
			gray: {
				200: 'rgb(var(--color-gray-200) / <alpha-value>)',
				400: 'rgb(var(--color-gray-400) / <alpha-value>)',
				600: 'rgb(var(--color-gray-600) / <alpha-value>)',
				800: 'rgb(var(--color-gray-800) / <alpha-value>)',
				900: 'rgb(var(--color-gray-900) / <alpha-value>)'
			}
		},
		fontSize: {
			xs: 'var(--font-size-xs)',
			sm: 'var(--font-size-sm)',
			base: 'var(--font-size-base)',
			lg: 'var(--font-size-lg)',
			xl: 'var(--font-size-xl)'
		},
		fontFamily: {
			serif: ['Titillium', ...defaultTheme.fontFamily.serif],
			sans: ['Roboto', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: []
};
