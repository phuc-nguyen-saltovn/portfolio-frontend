module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    'prettier',
  ],
  plugins: ['import', 'unused-imports'],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    'no-useless-constructor': 'off',
    'vue/multi-word-component-names': 'off',
    eqeqeq: ['error', 'smart'],
    'arrow-parens': [2, 'as-needed'],
    'no-duplicate-imports': [2, {includeExports: true}],
    'prefer-arrow-callback': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'no-await-in-loop': 2,
    'no-constant-binary-expression': 2,
    'no-debugger': 2,
    'no-dupe-else-if': 2,
    'no-inner-declarations': 2,
    'no-unused-vars': 2,
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 2,
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {order: 'asc', caseInsensitive: true},
      },
    ],
    'vue-scoped-css/require-v-deep-argument': 2,
  },
};