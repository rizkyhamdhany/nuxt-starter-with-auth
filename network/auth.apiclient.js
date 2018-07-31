import * as NETWORK from './apiclient'

export const AUTHENTICATE = function (params) {
  return NETWORK.API_CLIENT.post('/authenticate', params)
}

export const GET_CAPTCHA = function (token) {
  return NETWORK.API_CLIENT_WITH_TOKEN(token).get('/getcaptcha')
}


export const AUTH_USER = function (token) {
  return NETWORK.API_CLIENT_WITH_TOKEN(token).get('/auth-user')
}

export const GET_MENU = function (token) {
  return NETWORK.API_CLIENT_WITH_TOKEN(token).get('/menu')
}
