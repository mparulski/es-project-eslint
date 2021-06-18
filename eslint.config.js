module.exports = {
  extends: [],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    settings: {
      'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
    },
  },
  rules: {},
}
