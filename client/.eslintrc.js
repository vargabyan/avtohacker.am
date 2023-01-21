/* eslint-disable no-dupe-keys */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
    'no-nested-ternary': 1,
    'react/jsx-no-undef': 1,
    'import/prefer-default-export': 1,
    'react/react-in-jsx-scope': 1,
    'no-shadow': 1,
    quotes: 1,
    'eol-last': 1,
    'react/jsx-props-no-spreading':1,
    'no-unused-vars': 1,
    'max-len':1,
    'react/destructuring-assignment': 1,
    camelcase: 1,
    'no-bitwise': 1,
    'no-param-reassign': 1,
    'react/prop-types': 1,
    'react-hooks/exhaustive-deps': 1,
    'no-restricted-syntax': 1,
    'react/no-unescaped-entities': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-indent': 1,
    'import/extensions': 1,
    'hooks/exhaustive-deps': 1,
    'react-hooks/exhaustive-deps': 1,
  },
};
