module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'prettier',
    'prettier/prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    curly: ['warn', 'all'],
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
};
