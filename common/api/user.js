import { post } from './methods'

export const registerUser = (data) => {
  var user = {
    'balls': data.balls,
    'birthDate': data.date,
    'debut': data.debut,
    'email': data.email,
    'fio': data.name,
    'hasPartner': data.hasPartner,
    'level': data.level,
    'partner': data.partner,
    'phone': data.phone,
    'vk': data.vk
  }
  return post('/register', user)
}

export const registerGuest = (data) => {
  return fetch('/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email
    })
  })
}
