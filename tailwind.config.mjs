/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Esto permite usar 'dark:' en clases
	theme: {
		extend: {
			//      ### Fonts
			fontFamily: {
				// #### Headings, Call- to - actions, Header Navigation
				// "sans": ['"SF Pro Display"', 'sans-serif'], // Usando la fuente personalizada
				// #### Body
				// "serif": ['"Open Sans"', "serif"], // Otra fuente para el cuerpo
			},

			fontSize: {

				// #### Body Copy
				"body": "14px",

			},
			colors: {
				'hub-background': '#FFFFFF',
				'hub-border': '#EDEDED',
				'hub-title': '#121020',
				'hub-subtitle': '#888888',
				'hub-background-nav': '#FAFAFA',

				'hub-text': '#FFFFFF',
				'icons': '#6E6E6E',
				// dark
				'hub-background-dark': '#101419',
				'hub-border-dark': '#052B2E',
				'hub-title-dark': '#FFFFFF',
				'hub-subtitle-dark': '#999999',
				'hub-background-nav-dark': '#080C11',

				'card-background': '#e8ff8a',  // verde-limón fosfo
				'card-text': '#c18503',   // dorado tostado
				'card-text-btn': '#28190F',  // marrón oscuro
				'card-border': '#FBAB01', // dorado brillante
				'card-shadow': '[rgba(0,0,0,0.2)_0px_8px_0px,_rgb(232,255,138)_0px_8px_0px]',
				'card-shadow-bg': '#f3ffa4',
				'hub-inactive': '#B0B0B0',
				// light: {
				// 	background: '#fffcc4', // fondo crema intenso
				// 	navbar: '#ffe86e', // amarillo cálido como card-border
				// 	text: '#3e2600',   // marrón más fuerte (legible y cálido)
				// },
				// dark: {
				// 	background: '#12140a', // negro oliva profundo
				// 	navbar: '#20250d', // oliva oscuro
				// 	text: '#e8ff8a', // mismo de tus cards, súper brillante
				// },


			},
			backgroundImage: {
				'btn-gradient': 'linear-gradient(to right, #825BDD, #5327BA)', // Gradiente para botones
			},
		},

	},
	plugins: [require('tailwindcss-animate')],

}
