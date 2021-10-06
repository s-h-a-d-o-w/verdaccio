module.exports = {
  extends: ['@verdaccio/eslint-config'],
  globals: {
    cy: 'readonly',
  },
  rules: {
    'jest/valid-expect': 'off',
  },
};
