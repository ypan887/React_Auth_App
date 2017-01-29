import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { browserHistory } from 'react-router'

const tokenUrl = "http://localhost:3000/auth/validate_token";
let authUrl = "http://localhost:3000/auth";

export const toggleTab = (tab) => {
  return {
    type: "TOGGLE_TAB",
    currentTab: tab
  }
}

export const getInput = (input) => {
  return {
    type: "GET_INPUT",
    input: input
  }
}

export const emptyInput = () => {
  return {
    type: "EMPTY_INPUT"
  }
}

export const toggleLoading = () => {
  return {
    type: "TOGGLE_LOADING"
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
    dispatch(login(data["user_name"] || data["name"] || data["nickname"]))
    browserHistory.push('/');
  }
}

export const validateToken = (auth) => {
  setAuthorizationToken(JSON.parse(auth));
  return (dispatch, getState) => {
    axios.get(tokenUrl)
      .then((response) => {
        let data = response.data.data;
        return data['name'] || data['nickname'];
      }, () => { localStorage.removeItem('auth'); })
      .then((userName)=>{
        dispatch(login(userName));
      })
  }
}

export const validateAuth = (input, authAction) => {
  if(authAction === "sign in"){
    authUrl += "/sign_in"
  }

  return (dispatch, getState) => {
    dispatch(toggleLoading());
    axios({
      method: 'post',
      url: authUrl,
      data: input,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => {
        let data = response.data.data;
        dispatch(handleToken(data));
      })
      .then(() => {
        dispatch(emptyInput());
      })
      .then(() => {
        dispatch(toggleLoading());
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
