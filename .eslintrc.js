// eslint-disable-next-line no-undef
module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 13,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks', 'testing-library', 'jest-dom'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-extra-boolean-cast': 'off',
      'no-unsafe-optional-chaining': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'max-len': ['warn', { code: 140 }],
      'react/no-unescaped-entities': ['warn', { forbid: ['>', '"', '}'] }],
      'indent': ['off', 2, { SwitchCase: 1 }],
      'linebreak-style': ['off', 'unix'],
      'quotes': ['warn', 'single'],
      'semi': ['warn', 'always'],
      'jest-dom/prefer-checked': 'off',
      'jest-dom/prefer-empty': 'off',
      'jest-dom/prefer-in-document': 'off',
      'jest-dom/prefer-to-have-class': 'off',
      'jest-dom/prefer-to-have-value': 'off',
      'jest-dom/prefer-enabled-disabled': 'off',
      'jest-dom/prefer-required': 'off',
      'jest-dom/prefer-to-have-attribute': 'off',
    },
    //  Enable eslint-plugin-testing-library rules or preset only for matching files
    overrides: [
      {
        files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
        extends: ['plugin:testing-library/react'],
        rules: {
          'testing-library/await-async-query': 'off',
          'testing-library/await-async-utils': 'off',
          'testing-library/await-fire-event': 'off',
          'testing-library/no-container': 'off',
          'testing-library/no-await-sync-query': 'off',
          'testing-library/prefer-screen-queries': 'off',
          'testing-library/no-debugging-utils': 'off',
          'testing-library/no-render-in-setup': 'off',
        },
      },
    ],
  };
  