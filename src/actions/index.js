import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { browserHistory } from 'react-router'

const url = "http://localhost:3000/auth/validate_token";

export const toggleTab = (tab) => {
  return {
    type: "TOGGLE_TAB",
    currentTab: tab
  }
}

export const login = (userName) => {
  return {
    type: "LOGGED_IN",
    userName: userName
  }
}

export const handleToken = (data) => {
  return (dispatch, getState) => {
    let auth = {
      "access-token": data["auth_token"],
      "client": data["client_id"],
      "uid": data["uid"]
    };
    localStorage.setItem('auth', auth);
    setAuthorizationToken(auth);
    dispatch(login(data["user_name"]))
    browserHistory.push('/');
  }
}

export const validateToken = () => {
  let auth = localStorage.auth;
  if (auth) {
    setAuthorizationToken(auth);
    return (dispatch, getState) => {
      axios.get(url)
        .then(function (response) {
          console.log(response);
          debugger;
        })
        .then((userName)=>{
          dispatch(login(userName))
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}

//export const logout
// log out action
