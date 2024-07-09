/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-html/astro',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-scss',
  ],
  overrides: [
    {
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'custom-property-pattern': null,
    'no-descending-specificity': null,
    'keyframes-name-pattern': null,
  },
};
