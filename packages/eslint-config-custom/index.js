module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  overrides: [
    {
      files: ['*.ts*'],
      parser: '@typescript-eslint/parser',
      extends: [
        'prettier',
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      plugins: ['@typescript-eslint', 'prettier'],
      parserOptions: {
        project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
      },
      rules: {
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: ['*.js'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
      },
      env: {
        browser: true,
        node: true,
      },
    },
  ],
};
