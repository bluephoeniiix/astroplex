import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// import remarkMermaid from 'astro-diagram/remark-mermaid';
export const locales = {
	root: { label: 'English', lang: 'en' },
};

/* https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables */
const VERCEL_PREVIEW_SITE =
	process.env.VERCEL_ENV !== 'production' &&
	process.env.VERCEL_URL &&
	`https://${process.env.VERCEL_URL}`;

const site = VERCEL_PREVIEW_SITE || 'https://starlight.astro.build/';

export default defineConfig({
	site,
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
				// baseUrl: 'https://github.com/withastro/starlight/edit/main/docs/',
				baseUrl: 'https://github.com',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
				discord: 'https://astro.build/chat',
			},
			head: [
			],
			customCss: process.env.NO_GRADIENTS ? [] : [
				'./src/assets/landing.css',
				'@ibm/plex/css/ibm-plex.css',
			],
			locales,
			sidebar: [
				{
					label: 'example markdown',
					items: [
						{
							label: 'mdx1',
							link: 'mdx1',
						},
						{
							label: 'mdx2',
							link: 'mdx2',
						},
						{
							label: 'mdx3',
							link: 'mdx3',
						},
					],
				},
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
	}
});
