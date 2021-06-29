module.exports = ({hasReact}) => {
  const main = {
    extends: [],
    env: {
      browser: true,
      es2020: true,
      node: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        impliedStrict: true,
        jsx: hasReact,
      },
      settings: {
        'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
      },
    },
    rules: {},
  }

  return {
    ...main,
    ...require('./rules/best-practices'),
    ...require('./rules/errors'),
    ...require('./rules/es6'),
  }
}
