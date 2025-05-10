/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,ts}': ['eslint --fix'],
  '*.{json,md,yml,yaml}': ['prettier --write'],
}
