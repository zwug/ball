import models from '../models'

exports.register = (req, res) => {
  var balls = req.body.balls && req.body.balls.toString();
  const user = models.User.build({
    'fio': req.body.fio,
    'balls': balls,
    'birth_date': req.body.birthDate,
    'debut': req.body.debut,
    'email': req.body.email,
    'has_partner': req.body.hasPartner,
    'level': req.body.level,
    'partner': req.body.partner,
    'phone': req.body.phone,
    'vk': req.body.vk
  })
  user.save()
  .then(() => {
    console.log('SAVED!')
    res.sendStatus(200)
  })
  .catch(() => {
    res.sendStatus(400)
  })
}
