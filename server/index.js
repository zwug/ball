require('babel-register')
require.extensions['.css'] = () => {
  return;
}
require('./server')
