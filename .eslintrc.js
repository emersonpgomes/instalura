module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint-config-airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.json', '.d.ts'],
      },
    },
    'import/extensions': ['.ts', '.tsx'],
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/state-in-constructor': ['error', 'never'],
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'react/jsx-key': 'error',
  },
};
