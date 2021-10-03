module.exports = {
  extends: ['@verdaccio/eslint-config'],
  globals: {
    fixture: 'readonly',
  },
  rules: {
    'new-cap': 'off',
  },
};
