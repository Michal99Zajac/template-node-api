import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tsEslint from 'typescript-eslint'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  { files: ['**/*.{js,mjs,cjs,ts}'], languageOptions: { globals: globals.node } },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': 'warn',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  tsEslint.configs.recommended,
])
