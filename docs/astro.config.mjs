import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
export const locales = {
	root: {
		label: 'English',
		lang: 'en',
	},
};

/* https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables */
const VERCEL_PREVIEW_SITE =
	process.env.VERCEL_ENV !== 'production' &&
	process.env.VERCEL_URL &&
	`https://${process.env.VERCEL_URL}`;
const site = VERCEL_PREVIEW_SITE;

// https://astro.build/config
export default defineConfig({
	site: 'https://bluephoeniiix.github.io',
	base: '/',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'BLUEPHOENIIIX',
			logo: {
				light: '/src/assets/logo-light.svg',
				dark: '/src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			editLink: {
				baseUrl: 'https://github.com/bluephoeniiix/astroplex/edit/main/docs/src/content/docs',
			},
			social: {
				github: 'https://github.com/bluephoeniiix',
			},
			head: [],
			customCss: process.env.NO_GRADIENTS
				? []
				: ['./src/assets/landing.css', '@ibm/plex/css/ibm-plex.css'],
			locales,
			sidebar: [

			],
			plugins: process.env.CHECK_LINKS
				? [
						starlightLinksValidator({
							errorOnFallbackPages: false,
							errorOnInconsistentLocale: true,
						}),
					]
				: [],
		}),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
