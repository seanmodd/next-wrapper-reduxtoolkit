

// module.exports = {
//   extends: ['airbnb', 'airbnb-typescript'],
//   parserOptions: {
//     project: './tsconfig.json',
//   },
//   rules: {
//     'react/jsx-filename-extension': [
//       'error',
//       { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
//     ],
//     'react/jsx-props-no-spreading': 'off',
//     'react/prop-types': 'off',
//     'react/react-in-jsx-scope': 'off',
//     '@next/next/no-page-custom-font': 'off',
//     'no-plusplus': 'off',
//   },

// };

module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    // 'airbnb/hooks',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.eslint.json'], // Specify it only for TypeScript files
      },
    }
  ],
  parser: '@typescript-eslint/parser',
  
  // parser: '@typescript-eslint/parser',
};
