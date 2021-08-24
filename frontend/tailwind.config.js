module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		screens: {
			"mobile-sm": "320px",
			"mobile-md": "375px",
			"mobile-lg": "425px",
			tablet: "768px",
			computer: "1024px",
			"computer-lg": "1440px",
			"computer-xl": "2560px",
		},
		fontFamily: {
			rajdhani: ['"Rajdhani"', "sans-serif"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
