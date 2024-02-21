import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

export const locales = {
	root: { label: 'English', lang: 'en' },
	de: { label: 'Deutsch', lang: 'de' },
	es: { label: 'Español', lang: 'es' },
	ja: { label: '日本語', lang: 'ja' },
	fr: { label: 'Français', lang: 'fr' },
	it: { label: 'Italiano', lang: 'it' },
	id: { label: 'Bahasa Indonesia', lang: 'id' },
	'zh-cn': { label: '简体中文', lang: 'zh-CN' },
	'pt-br': { label: 'Português do Brasil', lang: 'pt-BR' },
	ko: { label: '한국어', lang: 'ko' },
	tr: { label: 'Türkçe', lang: 'tr' },
	ru: { label: 'Русский', lang: 'ru' },
	hi: { label: 'हिंदी', lang: 'hi' },
	da: { label: 'Dansk', lang: 'da' },
	uk: { label: 'Українська', lang: 'uk' },
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
				baseUrl: 'https://github.com/withastro/starlight/edit/main/docs/',
			},
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// 	discord: 'https://astro.build/chat',
			// },
			head: [
				// {
				// 	tag: 'script',
				// 	attrs: {
				// 		src: 'https://cdn.usefathom.com/script.js',
				// 		'data-site': 'EZBHTSIG',
				// 		defer: true,
				// 	},
				// },
				// {
				// 	tag: 'meta',
				// 	attrs: { property: 'og:image', content: site + 'og.jpg?v=1' },
				// },
				// {
				// 	tag: 'meta',
				// 	attrs: { property: 'twitter:image', content: site + 'og.jpg?v=1' },
				// },
			],
			customCss: process.env.NO_GRADIENTS ? [] : [
				'./src/assets/landing.css',
				'@ibm/plex/css/ibm-plex.css',
			],
			locales,
			sidebar: [
				{
					label: 'EXAMPLE_1',
					translations: {
						de: 'EXAMPLE_1',
						es: 'EXAMPLE_1',
						ja: 'EXAMPLE_1',
						fr: 'EXAMPLE_1',
						it: 'EXAMPLE_1',
						id: 'EXAMPLE_1',
						'zh-CN': 'EXAMPLE_1',
						'pt-BR': 'EXAMPLE_1',
						ko: 'EXAMPLE_1',
						tr: 'EXAMPLE_1',
						ru: 'EXAMPLE_1',
						hi: 'EXAMPLE_1',
						uk: 'EXAMPLE_1',
					},
					items: [
						{
							label: 'mdx1',
							link: 'mdx1',
							translations: {
								de: 'mdx1',
								es: 'mdx1',
								ja: 'mdx1',
								fr: 'mdx1',
								it: 'mdx1',
								id: 'mdx1',
								'zh-CN': 'mdx1',
								'pt-BR': 'mdx1',
								ko: 'mdx1',
								tr: 'mdx1',
								ru: 'mdx1',
								hi: 'mdx1',
								uk: 'mdx1',
							},
						},
						{
							label: 'Manual Setup',
							link: 'manual-setup',
							translations: {
								de: 'Manuelle Einrichtung',
								es: 'Configuración Manual',
								ja: '手動セットアップ',
								fr: 'Installation manuelle',
								// it: 'Manual Setup',
								id: 'Instalasi Manual',
								'zh-CN': '手动配置',
								'pt-BR': 'Instalação Manual',
								ko: '수동으로 설정하기',
								tr: 'Elle Kurulum',
								ru: 'Установка вручную',
								hi: 'मैनुअल सेटअप',
								uk: 'Ручне встановлення',
							},
						},
						{
							label: 'Environmental Impact',
							link: 'environmental-impact',
							translations: {
								de: 'Umweltbelastung',
								es: 'Documentación ecológica',
								ja: '環境への負荷',
								fr: 'Impact environnemental',
								it: 'Impatto ambientale',
								id: 'Dampak terhadap lingkungan',
								'zh-CN': '环境影响',
								'pt-BR': 'Impacto Ambiental',
								ko: '환경적 영향',
								tr: 'Çevre Etkisi',
								ru: 'Влияние на окружающую среду',
								hi: 'पर्यावरणीय प्रभाव',
								uk: 'Вплив на довкілля',
							},
						},
					],
				},
				{
					label: 'Guides',
					translations: {
						de: 'Anleitungen',
						es: 'Guías',
						ja: 'ガイド',
						fr: 'Guides',
						it: 'Guide',
						id: 'Panduan',
						'zh-CN': '指南',
						'pt-BR': 'Guias',
						ko: '가이드',
						tr: 'Rehber',
						ru: 'Руководства',
						hi: 'गाइड',
						uk: 'Ґайди',
					},
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					translations: {
						de: 'Referenz',
						es: 'Referencias',
						ja: 'リファレンス',
						fr: 'Référence',
						it: 'Riferimenti',
						id: 'Referensi',
						'zh-CN': '参考',
						'pt-BR': 'Referência',
						ko: '참조',
						tr: 'Referanslar',
						ru: 'Справочник',
						hi: 'संदर्भ',
						uk: 'Довідник',
					},
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Resources',
					badge: 'New',
					translations: {
						'zh-CN': '资源',
						fr: 'Ressources',
						'pt-BR': 'Recursos',
						ja: 'リソース',
					},
					autogenerate: { directory: 'resources' },
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
});
