import user from './user'

module.exports = (app) => {
  app.post('/register', user.register)
};
