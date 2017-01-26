let myHeaders = new Headers({
  'Authorization': sessionStorage.getItem('token')
});

let getInit = { method: 'GET',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default' };

let apiUrl = 'http://localhost:3000';

export function readFromAPI(apiUrl, callBack){
  fetch(apiUrl, getInit)
    .then( callBack )
}
