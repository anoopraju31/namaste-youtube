/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			containers: {
				'8xl': '96rem',
				'9xl': '108rem',
				'10xl': '128rem',
			},
		},
	},
	plugins: [require('@tailwindcss/container-queries')],
}
