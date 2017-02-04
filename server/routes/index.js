import user from './user'

module.exports = (app) => {
  app.post('/register', user.register)
  app.post('/registerguest', user.registerGuest)
};
