
/*
oddly, the sourceType command is not working
https://www.freecodecamp.org/news/the-essentials-eslint/
*/
module.exports = {
  'root': true,
  'parserOptions': {
    'ecmaFeatures': {
        'jsx': true,
        'modules': true,
        'spread': true,
        'restParams': true
    },
    'env' : {
        'browser' : true,
        'node' : true,
        'es6' : true
    },
    'sourceType': 'module'
},
'extends': ['airbnb', 'airbnb/hooks'],
  'rules': {
    /* Indentation */
    'no-mixed-spaces-and-tabs': 2,
    'indent': [2, 2],
    /* Variable cames */
    'camelcase': 2,
    /* Language constructs */
    'curly': 2,
    'eqeqeq': [2, 'smart'],
    'func-style': [2, 'expression'],
    'no-var': 2,
    'prefer-const': 2,
    /* Semicolons */
    'semi': 2,
    'no-extra-semi': 2,
    /* Padding & additional whitespace (preferred but optional) */
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'semi-spacing': 1,
    'key-spacing': 1,
    'block-spacing': 1,
    'comma-spacing': 1,
    'no-multi-spaces': 1,
    'space-before-blocks': 1,
    'keyword-spacing': [1, { 'before': true, 'after': true }],
    'space-infix-ops': 1,
    /* Minuta */
    'comma-style': [2, 'last'],
    'quotes': [1, 'single'],
    'no-unused-vars': 2,
    'no-undef': 2
  }
};