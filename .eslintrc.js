module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: ['airbnb-base'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
