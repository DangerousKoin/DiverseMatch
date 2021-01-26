import tokenService from './tokenService';

const BASE_URL = '/api/search'

function search(keyword){
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(keyword)
    })
    .then(res => {
        return res.json();
    }
    )};

  export default {
      search
  };