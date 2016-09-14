module.exports = {
  rules : {
    'block-spacing' : 2,
    'brace-style'   : 2,
    'comma-spacing' : 2,
    'indent'        : [2, 2],
    'key-spacing'   : [2, {
      'afterColon'    : true,
      'align'         : 'colon',
      'beforeColon'   : true,
      'mode'          : 'minimum'
    }],
    'keyword-spacing' : [2, {
      'overrides' : {
        'else' : {
          'after'   : false,
          'before'  : false
        }
      }
    }],
    'one-var'         : [2, 'never'],
    'semi'            : 2
  }
};
