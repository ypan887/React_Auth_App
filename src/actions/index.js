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

export const logout = () => {
  setAuthorizationToken();
  localStorage.removeItem('auth');
  return {
    type: "LOGGED_OUT"
  }
}

export const handleToken = (data) => {
  return (dispatch, getState) => {
    let auth = {
      "access-token": data["auth_token"],
      "client": data["client_id"],
      "uid": data["uid"]
    };
    localStorage.setItem('auth', JSON.stringify(auth));
    setAuthorizationToken(auth);
    dispatch(login(data["user_name"]))
    browserHistory.push('/');
  }
}

export const validateToken = (auth) => {
  setAuthorizationToken(JSON.parse(auth));
  return (dispatch, getState) => {
    axios.get(url)
      .then((response) => {
        let data = response.data.data;
        return data['name'] || data['nickname'];
      }, () => { localStorage.removeItem('auth'); })
      .then((userName)=>{
        dispatch(login(userName));
      })
  }
}
