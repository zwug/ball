import { post } from './methods'

export const loginRequest = (data) => {
  var user = {
    'email': data.email,
    'password': data.password
  }
  return post('/api/admin/login', user).then(response => response.json())
}

export const ordersRequest = (data) => {
  var user = {
    'token': data.token
  }
  return post('/api/admin/orders', user).then(response => response.json())
}
