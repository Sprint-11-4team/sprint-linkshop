import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Node.js globals 추가
      },
      extends: ['airbnb-base', 'prettier'],
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];