/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: "#FFFFFF",
				text: "#000000",
				company: "#233B79",
				accent: "#EC9A4E"
			}
		},
	},
	plugins: [],
}
