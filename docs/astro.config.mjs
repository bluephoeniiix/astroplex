import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import react from '@astrojs/react';


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
					label: 'About This Site',
					items: [
						{
							label: 'Blue Phoeniiix Channel',
							link: 'bluephoeniiix_channel',
						},
						{
							label: 'Themes',
							link: 'astroplex_theme',
						},
						{
							label: 'Layout',
							link: 'astroplex_layout',
						},
						{
							label: 'Todo',
							link: 'astroplex_others',
						},
					],
				},
				{ 
					label: 'City: Skylines 1',
					items: [
						{
							label: 'Basic Mods Config',
							link: 'csl_basic_mods',
						},
						{
							label: 'Graphics Enhancement',
							link: 'csl_enhanced_graphics',
						}, 
						{
							label : 'Anarchy Mods (1)',
							link: 'csl_anarchy_one',
						},
						{
							label : 'Anarchy Mods (2)',
							link: 'csl_anarchy_two',
						},
						{
							label: 'Commercial Buildings High',
							link: 'csl_commercial_buildings_high',
						},
						{
							label: 'Commercial Buildings Mid',
							link: 'csl_commercial_buildings_mid',
						}, 
						{
							label : 'Commercial Buildings Low',
							link: 'csl_commercial_buildings_low',
						},
						{
							label: 'Residential Buildings High',
							link: 'csl_residential_buildings_high',
						},
						{
							label: 'Residential Buildings Mid',
							link: 'csl_residential_buildings_mid',
						}, 
						{
							label : 'Residential Buildings Low',
							link: 'csl_residential_buildings_low',
						},
						{
							label: 'Office Buildings High',
							link: 'csl_office_buildings_high',
						},
						{
							label: 'Office Buildings Mid',
							link: 'csl_office_buildings_mid',
						}, 
						{
							label : 'Office Buildings Low',
							link: 'csl_office_buildings_low',
						},
						{
							label : 'Vehicles',
							link: 'csl_vehicles',
						},
						{
							label : 'Roads',
							link: 'csl_roads',
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
		}), react(),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	}
});
