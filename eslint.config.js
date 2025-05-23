const next = require('@next/eslint-plugin-next');
const eslintRecommended = require('@eslint/js');
const globals = require('globals');

module.exports = [
  {
    // Базовые настройки
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  eslintRecommended.configs.recommended,
  {
    // Плагин Next.js
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
    },
  },
  {
    // Кастомные правила
    rules: {
      'max-len': ['warn', { code: 120 }],
      'no-tabs': 'error',
      'object-curly-newline': 'off',
      'import/prefer-default-export': 'off',
    },
  },
];