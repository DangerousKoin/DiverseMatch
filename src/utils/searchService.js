import tokenService from './tokenService';

const BASE_URL = '/'

function search(keyword){
  return fetch(`${BASE_URL}search?${keyword}`, {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
  }).then(res => res.json())

}

export default {
    search
}