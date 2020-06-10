module.exports = {
  'extends': [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'react/prop-types': 0,
    'require-jsdoc': 0,
    'no-unused-vars': ['error', {'varsIgnorePattern': '^_unused'}],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        'allowExpressions': true,
        'allowTypedFunctionExpressions': true,
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'comma',
          'requireLast': true
        },
        'singleline': {
          'delimiter': 'comma',
          'requireLast': false
        }
      },
    ],
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};
