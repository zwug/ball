import { loginRequest, ordersRequest } from '../api/admin';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const ORDERS_COMPLETE = 'ORDERS_COMPLETE'
export const ORDERS_FAIL = 'ORDERS_FAIL'

function setCookie(cname, cvalue, exdays) {
  let d = new Date()
  d.setTime(d.getTime() + (exdays*24*60*60*1000))
  const expires = 'expires='+ d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

function loginFail() {
  return {
    type: LOGIN_FAIL
  }
}

function ordersSuccess(orders) {
  return {
    type: ORDERS_COMPLETE,
    orders
  }
}

function ordersFail() {
  return {
    type: ORDERS_FAIL
  }
}

export const login = (data) => (dispatch) => {
  return loginRequest(data)
  .then((response) => {
    console.log(response);
    setCookie('token', response['token'], 1)
    dispatch(loginSuccess())
  })
  .catch((err) => {
    console.log(err);
    dispatch(loginFail())
  })
}

export const getOrders = () => (dispatch) => {
  const data = {
    'token': getCookie('token')
  }
  return ordersRequest(data)
  .then((orders) => {
    const ordersParsed = {
      guests: JSON.parse(orders['guests']),
      members: JSON.parse(orders['members'])
    }
    dispatch(ordersSuccess(ordersParsed))
  })
  .catch((err) => {
    console.log(err);
    dispatch(ordersFail())
  })
}
