/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"nope-grey": "#D0CACA",
				"nope-grey-middle": "#3D3D3D",
				"nope-grey-dark": "#171717",
				"nope-flieder": "#D8C1FF",
				"nope-flieder-dark": "#6B2DEE",
				"nope-mellow": "#E8BE61",
				"nope-mellow-dark": "#EAB662",
				"nope-lachs": "#FF706B",
			},
			backgroundImage: {
				circle: "url('/src/images/circle.svg')",
				"circle-dark": "url('/src/images/circleDark.svg')",
				"about-me": "url('/src/images/people.png')",
				skills: "url('/src/images/website.png')",
				contact: "url('/src/images/inbox.png')",
			},
			fontFamily: {
				Lato: ["Lato", "sans-serif"],
				Montserrat: ["Montserrat", "sans-serif"],
				Noto: ["'Noto Sans'", "sans-serif"],
			},
			fontSize: {
				heroText1: "2.25rem",
				heroText2: "1.5rem",
			},
			letterSpacing: {
				somemwide: "0.171875rem",
				wiidest: "0.234em",
				wiiidest: "0.940em",
			},
		},
	},
	plugins: [],
};
