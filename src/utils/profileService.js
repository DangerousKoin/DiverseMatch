import tokenService from './tokenService';

const BASE_URL = '/api/profiles/'

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