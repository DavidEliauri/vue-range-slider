/* eslint-env node */
/** @type {import('@types/prettier').Config} */
module.exports = {
    semi: true,
    tabWidth: 4,
    singleQuote: true,
    singleAttributePerLine: true,
    trailingComma: 'es5',
    endOfLine: 'crlf',
    vueIndentScriptAndStyle: true,
    plugins: ['prettier-plugin-tailwindcss'],
    tailwindConfig: './tailwind.config.js',
};
