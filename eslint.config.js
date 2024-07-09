import antfu from '@antfu/eslint-config';

export default antfu({
  astro: true,
  typescript: true,
  formatters: {
    css: true,
    astro: true,
  },
  stylistic: {
    quotes: 'single',
    semi: true,
    indent: 2,
  },
});
