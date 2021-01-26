import tokenService from './tokenService';

const BASE_URL = '/'

function search(keyword){
  return fetch(`${BASE_URL}search?=${keyword}`, {
    method: 'POST'
  })

}

export default {
    search
}