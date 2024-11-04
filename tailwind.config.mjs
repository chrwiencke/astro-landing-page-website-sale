/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
	  themes: [
		{
		  mytheme: {
			
  "primary": "#d600ff",
			
  "primary-content": "#100016",
			
  "secondary": "#00d200",
			
  "secondary-content": "#001000",
			
  "accent": "#00a700",
			
  "accent-content": "#000a00",
			
  "neutral": "#272816",
			
  "neutral-content": "#cfcfcb",
			
  "base-100": "#0e3134",
			
  "base-200": "#0a292c",
			
  "base-300": "#072224",
			
  "base-content": "#cbd2d2",
			
  "info": "#0065ff",
			
  "info-content": "#d0e3ff",
			
  "success": "#00ffd4",
			
  "success-content": "#001610",
			
  "warning": "#955d00",
			
  "warning-content": "#eaded0",
			
  "error": "#ff525e",
			
  "error-content": "#160203",
			},
		  },
		],
	  },
	plugins: [
		require('daisyui'),
	],
}
