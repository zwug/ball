require('babel-register')
require.extensions['.css'] = () => {
  return;
}
require.extensions['.png'] = () => {
  return;
}
require('./server')
