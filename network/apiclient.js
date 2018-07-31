import axios from 'axios';

//var base_url = 'http://172.17.20.243/api/ims-api/public/api'
var base_url = 'http://localhost:80/oms-api/public/api'
//var base_url = 'http://imsapi.mncgroup.com/api'

export const API_CLIENT = axios.create({
  baseURL: base_url,
  headers : {
    'Content-type' : 'application/x-www-form-urlencoded',
  }
})

export const API_CLIENT_WITH_TOKEN = function (token) {
    return axios.create({
        baseURL: base_url,
        headers : {
            'Content-type' : 'application/x-www-form-urlencoded',
            Authorization: "Bearer " + token
        }
    })
}

