import tokenService from './tokenService';

const BASE_URL = '/api/profile/'

export function addInterest(id){
  
  return fetch(`${BASE_URL}/interest/${id}`, {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
  }).then(res => res.json());
}

export function addDislike(id){
  return fetch(`${BASE_URL}/dislike/${id}`, {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
  }).then(res => res.json());
}

export function getAllInterests() {
  return fetch(`${BASE_URL}/interests`, {
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => res.json());
}

export function getAllDislikes() {
  return fetch(`${BASE_URL}/dislikes`, {
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => res.json());
}