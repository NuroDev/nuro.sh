// @ts-check

// TODO: Convert file to use `.ts` instead of `.mjs` so we can
// export & use our `colors` property in our `Background` component.

import Animate from 'tailwindcss-animate';
import Typography from '@tailwindcss/typography';

const defineConfig = (config) => config;

export default defineConfig({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	plugins: [
		Animate,
		Typography,
	],
	theme: {
		extend: {
			colors: {
				gray: {
					50: '#f9fafb',
					100: '#eaeaeb',
					200: '#cacbcd',
					300: '#a7a9ac',
					400: '#696c71',
					500: '#282d34',
					600: '#24292f',
					700: '#181b20',
					800: '#121518',
					900: '#0c0e10',
				},
				primary: {
					50: '#32a4ff',
					100: '#289aff',
					200: '#1e90ff',
					300: '#1486ff',
					400: '#0a7cff',
					500: '#0072ff',
					600: '#0068f5',
					700: '#005eeb',
					800: '#0054e1',
					900: '#004ad7',
				},
			},
			transitionDuration: {
				2000: '2000ms',
			},
			transitionTimingFunction: {
				bounce: 'cubic-bezier(.47,1.64,.41,.8)',
			},
		},
	},
});
