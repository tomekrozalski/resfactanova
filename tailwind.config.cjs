import defaultTheme from 'tailwindcss/defaultTheme';
// import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			black: '#2d2d28',
			white: '#fff',
			red: '#915c3a',
			blue: '#5593a9',
			yellow: '#ebead2',
			gray: {
				200: '#555555',
				400: '#999994',
				600: '#cbcbc9',
				800: '#e3e3e1',
				900: '#eeeeed'
			}
		},
		fontFamily: {
			serif: ['Titillium', ...defaultTheme.fontFamily.serif],
			sans: ['Roboto', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: []
};
