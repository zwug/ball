import models from '../models'

exports.register = (req, res) => {
  var balls = req.body.balls && req.body.balls.join('|');
  const user = models.user.build({
    'fio': req.body.fio,
    'balls': balls,
    'birth_date': req.body.birthDate,
    'debut': req.body.debut,
    'email': req.body.email,
    'has_partner': req.body.hasPartner,
    'level': req.body.level,
    'partner': req.body.partner,
    'sex': req.body.sex,
    'phone': req.body.phone,
    'vk': req.body.vk
  })
  user.save()
  .then(() => {
    console.log('SAVED!')
    res.sendStatus(200)
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(400)
  })
}

exports.registerGuest = (req, res) => {
  const guest = models.guest.build({
    'tickets_count': req.body.ticketsCount,
    'fio': req.body.fio,
    'email': req.body.email,
    'phone': req.body.phone
  })
  guest.save()
  .then(() => {
    console.log('SAVED!')
    res.sendStatus(200)
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(400)
  })
}
