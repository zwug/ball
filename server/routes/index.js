import user from './user'
import admin from './admin'

module.exports = (app) => {
  app.post('/register', user.register)
  app.post('/registerguest', user.registerGuest)
  app.post('/sendsignup', user.signupHandler)
  app.post('/api/admin/login', admin.login)
  app.post('/api/admin/orders', admin.getOrders)
};
