const errorLevel = {
  error: 2,
  off: 0,
  warn: 1
}

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:all',
    'plugin:react/all',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'no-use-before-define': errorLevel.off,
    'react/forbid-component-props': errorLevel.off,
    'react/jsx-filename-extension': [
      errorLevel.off,
      {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    ]

  },
  settings: {
    react: {
      version: '16.13.1'
    }
  }
}
