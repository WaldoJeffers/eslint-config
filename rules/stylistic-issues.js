module.exports = {
  rules: {
    'block-spacing': 2,
    'brace-style': 2,
    'comma-spacing': 2,
    'indent': [2, 2, {"SwitchCase": 1}],
    'key-spacing': 2,
    'keyword-spacing': [2, {
      'overrides': {
        'else': {
          'after': false,
          'before': false
        }
      }
    }],
    'one-var': [2, 'never'],
    'semi': 2
  }
};
