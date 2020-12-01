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
    'func-style': errorLevel.off,
    'no-console': errorLevel.warn,
    'no-debugger': errorLevel.warn,
    'no-magic-numbers': errorLevel.off,
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
    ],
    'react/jsx-no-literals': errorLevel.off,
    'sort-imports': errorLevel.off,
    'sort-keys': errorLevel.off

  },
  settings: {
    react: {
      version: '16.13.1'
    }
  }
}
