import models from '../models'

exports.register = (req, res) => {
  console.log(req.body);
  const user = models.User.build({
    'first_name': req.body.firstname,
    'last_name': req.body.lastname,
    email: req.body.email
  })
  user.save().then(() => {
    console.log('SAVED!')
  })
  res.sendStatus(200)
}
