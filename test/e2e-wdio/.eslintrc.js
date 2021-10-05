module.exports = {
  extends: ['@verdaccio/eslint-config'],
  globals: {
    $: 'readonly',
    browser: 'readonly',
  },
  rules: {
    'new-cap': 'off',
  },
};
