import tokenService from './tokenService';

const BASE_URL = '/api/topics/'

export function create(topic){
    return fetch(BASE_URL, {
        method: 'POST',
        body: topic, // our info from the form
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json())
}

export function search(keyword){
  return fetch(`${BASE_URL}/search/${keyword}`, {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
  }).then(res => res.json())
}

export function removeTopic(id){
  return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
          'Authorization': 'Bearer ' + tokenService.getToken()
        }
  }).then(res => res.json());
}


export function getAll() {
    return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => res.json());
}