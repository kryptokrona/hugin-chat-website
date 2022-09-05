import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			scss: {
				prependData: `@import 'src/theme/global.scss';`
			}
		}),
	],

	kit: {
		adapter: adapter()
	},
	onwarn: (warning, handler) => {
		const { code } = warning;
		if (code === 'css-semicolonexpected' || code === 'css-ruleorselectorexpected' || code === 'css-unused-selector')
			return;
		handler(warning);
	}
};

export default config;
