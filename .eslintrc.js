const initialRules = {
  'consistent-return': 'off',
  'eslint-comments/disable-enable-pair': 'off',
  'eslint-comments/require-description': [
    'warn',
    { ignore: ['eslint-enable'] },
  ], // we don't need to comment why we used "eslint-enable"
  'quote-props': ['error', 'consistent-as-needed'],
  quotes: ['error', 'single', { avoidEscape: true }],
  'arrow-parens': ['error', 'always'],
  curly: ['error', 'all'],
  'prefer-destructuring': 'error',
  'default-case': 'error',
  'no-restricted-exports': [
    'error',
    { restrictDefaultExports: { defaultFrom: true } },
  ],
  'func-names': ['error', 'always', { generators: 'never' }],
  'typescript-sort-keys/interface': [
    'error',
    'asc',
    { caseSensitive: false, natural: false, requiredFirst: true },
  ],
  'no-void': ['error', { allowAsStatement: true }], // we allow to use "void" to mark promises we don't wait for
  'no-unused-expressions': ['error'], // we prefer to use callFunction?.() instead of callFunction && callFunction()
  'no-empty-function': [
    'error',
    {
      allow: ['constructors'],
    },
  ],
  'no-dupe-keys': 'error',
  'no-console': ['error', { allow: ['warn', 'debug'] }],
  'no-underscore-dangle': ['off'], // we regulate an use of an underscore by other rules
  'no-plusplus': 'off', // It's okay to use ++ operator
  'no-magic-numbers': [
    'error',
    {
      ignore: [-1, 0, 1],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
      ignoreClassFieldInitialValues: true,
    },
  ],
  'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
};

const tsRules = {
  '@typescript-eslint/no-shadow': 'error', // Vars with the same name in different scopes are not allowed
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
  ], // Ignore variables with "_" prefix
  '@typescript-eslint/no-unused-expressions': ['error'],
  'quote-props': 'off',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/unbound-method': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      variables: false, // we should disable this since we use all "styles" vars before their definition
    },
  ],
  '@typescript-eslint/no-inferrable-types': 'off', // we should always set types, even if they are trivial (number, boolean, etc)
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksVoidReturn: false,
    },
  ],
};

const importSortOrderRule = {
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^(@?\\w|\\w)'], // libs
        ['^@hero24'], // our packages,
        ['^$\\.*'], // ts-aliases
        ['^\\.\\./'], // parent folder imports
        ['^\\./'], // relative folder imports
      ],
    },
  ],
};

const importRules = {
  'import/no-import-module-exports': 'off',
  'no-duplicate-imports': 'error', // imports from the same source must be in one record
  'import/no-cycle': ['error', { maxDepth: '∞' }],
  'import/prefer-default-export': 'off', // we use only named exports in the project
  'import/extensions': 'off',
  'import/no-extraneous-dependencies': ['off', { devDependencies: true }],
  ...importSortOrderRule,
};

const reactRules = {
  'react/react-in-jsx-scope': 'off',
  'react/jsx-uses-react': 'off',
  'react/display-name': 'off',
  'react/prop-types': 'off',
  'react/no-array-index-key': 'off',
  'react-hooks/exhaustive-deps': 'error',
  'react/style-prop-object': 'off', // we allow to use string as prop
  'react/require-default-props': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/no-unescaped-entities': 'off',
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
};

const paddingRules = {
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: '*',
      next: ['return', 'if', 'function', 'while', 'try', 'throw', 'class'],
    },
    {
      blankLine: 'always',
      prev: ['if', 'function', 'while', 'throw', 'class'],
      next: '*',
    },
    { blankLine: 'any', prev: 'const', next: ['const', 'let'] },
    { blankLine: 'always', prev: 'const', next: '*' },
    { blankLine: 'any', prev: 'const', next: 'const' },
    {
      blankLine: 'always',
      prev: 'multiline-const',
      next: '*',
    },
    {
      blankLine: 'always',
      prev: '*',
      next: 'multiline-const',
    },
  ],
};

const override = {
  reduxSlices: {
    files: ['**/slices/**/*.js', '**/slices/**/*.ts', '**/slices/**/*.tsx'],
    rules: {
      'no-param-reassign': 'off',
    },
  },
  tsFilesOnlyWithExports: {
    files: ['**/index.ts', '**/constants.ts'],
    rules: {
      'padding-line-between-statements': [
        'error',
        { blankLine: 'any', prev: 'export', next: 'export' },
      ],
    },
  },
  scripts: {
    files: ['**/scripts/*.ts'],
    rules: {
      'import/no-extraneous-dependencies': ['off', { devDependencies: true }],
    },
  },
  noMagicNumbersExceptions: {
    files: ['src/configs/*.ts', '**/*/enums.ts'],
    rules: {
      'no-magic-numbers': 'off',
    },
  },
  assets: {
    files: ['**/*/assets/**/*.ts'],
    rules: {
      '@typescript-eslint/function-component-definition': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      'import/no-dynamic-require': 'off',
      'global-require': 'off',
      '@typescript-eslint/naming-convention': 'off',
    },
  },
  restrictedExports: {
    files: ['src/app/**/*.tsx'],
    rules: {
      'no-restricted-exports': 'off',
    },
  },
  mjsFiles: {
    files: ['*.mjs'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'no-useless-escape': 'off',
    },
  },
};

const i18nextRules = {
  'i18next/no-literal-string': [2, { markupOnly: true }],
};

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:eslint-comments/recommended',
    'plugin:i18next/recommended',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2023,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-import',
    'simple-import-sort',
    'typescript-sort-keys',
    'react',
    'i18next',
  ],
  ignorePatterns: ['*.js', 'dist/', 'node_modules/', '**/*.scss', 'cypress/'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    ...i18nextRules,
    ...initialRules,
    ...tsRules,
    ...reactRules,
    ...importRules,
    ...paddingRules,
  },
  overrides: [...Object.values(override)],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
