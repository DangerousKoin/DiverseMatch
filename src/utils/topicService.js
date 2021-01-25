import tokenService from './tokenService';

const BASE_URL = '/api/topics'

export function search(keyword){
  return fetch(BASE_URL, {
      method: 'POST',
      body: keyword, // our info from the form
      headers: {
          'Authorization': 'Bearer ' + tokenService.getToken()
      }
  }).then(res => res.json())

}

export function create(topic){
    return fetch(BASE_URL, {
        method: 'POST',
        body: topic, // our info from the form
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json())

}

export function getAll() {
    return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => res.json());
  }