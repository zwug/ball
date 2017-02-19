import models from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secret = 'rainbow';

const addAdmin = (email, password) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      const newAdmin = models.admin.build({
        'email': email,
        'password': hash
      })
      newAdmin.save();
    })
  })
}

exports.login = (req, res) => {
  const { password, email } = req.body;
  if (!password || !email) {
    res.sendStatus(400)
    return
  }
  models.admin.findOne({
    where: {
      'email': email
    }
  }).then((admin) => {
    if (!admin) {
      res.sendStatus(404)
      return
    }
    bcrypt.compare(password, admin.password, (err, result) => {
      if (err || !result) {
        res.sendStatus(401)
        return
      }
      var token = jwt.sign({ email: email }, secret);

      res.json({
        'token': token
      })
    });
  })
}

exports.getOrders = (req, res) => {
  jwt.verify(req.body.token, secret, function(err, decoded) {
    if (err) {
      res.send(401)
      return
    }
    const orders = {}
    models.user.findAll({})
    .then((members) => {
      orders.members = JSON.stringify(members)
      models.guest.findAll({}).then((guests) => {
        orders.guests = JSON.stringify(guests)
        res.json(orders)
      })
    })
  })
}
