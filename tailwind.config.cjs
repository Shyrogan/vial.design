const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	plugins: [
		require('daisyui')
	],

	daisyui: {
		themes: [{
			mytheme: {
				"primary": "#ab87ff",
				"secondary": "#fface4",
				"accent": "#dac4f7",
				"neutral": "#e1eff6",
				"base-100": "#f8f7ff",
				"info": "#277da1",
				"success": "#90be6d",
				"warning": "#f9c74f",
				"error": "#f94144",
			},
		}],
	},
};

module.exports = config;
