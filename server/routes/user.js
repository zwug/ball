import models from '../models'

exports.register = (req, res) => {
  const user = models.User.build({
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@doe.com'
  })
  user.save().then(() => {
    console.log('SAVED!')
  })
  res.sendStatus(200)
}
