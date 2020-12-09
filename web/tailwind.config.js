module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		minHeight: {
			0: '0',
			'0.75/4': '10vh',
			'1/4': '25vh',
			'1/2': '50vh',
			'3/4': '75vh',
			full: '100vh',
		},
		backgroundColor: (theme) => ({
			...theme('colors'),
			primary: '#105EFC',
			primaryopacity: 'rgba(16,94,252,0.5)',
			secondary: '#fff',
			danger: '#e3342f',
			success: '#1BED09',
			successop: 'rgba(27,237,9,0.5)',
			progress: '#FFF500',
			progressop: 'rgba(255,245,0,0.5)',
		}),
		extend: {
			spacing: {
				72: '18rem',
				84: '21rem',
				96: '24rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
