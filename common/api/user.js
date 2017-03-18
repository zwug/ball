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
    'sex': data.sex,
    'phone': data.phone,
    'vk': data.vk
  }
  return post('/register', user)
}

export const registerGuest = (data) => {
  var user = {
    'ticketsCount': data.ticketsCount,
    'email': data.email,
    'fio': data.name,
    'phone': data.phone
  }
  return post('/registerguest', user)
}

export const sendSignup = (data) => {
  var user = {
    'fio': data.name,
    'phone': data.phone
  }
  return post('/sendsignup', user)
}
