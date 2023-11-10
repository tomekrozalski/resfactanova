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
				400: '#999994'
			}
		},
		fontFamily: {
			serif: ['Titillium', ...defaultTheme.fontFamily.serif],
			sans: ['Roboto', 'arial', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: []
};
