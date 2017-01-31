import axios from 'axios';
import Validator from 'validatorjs';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { authBaseUrl } from '../utils/apiConstant';
import { browserHistory } from 'react-router';

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

export const setErrors = (error) => {
  return {
    type: 'SET_ERRORS',
    error
  }
}

export const cleanErrors = () => {
  return {
    type: 'CLEAN_ERRORS'
  }
}

export const setInputError = (errors) => {
  return {
    type: "SET_INPUT_ERRORS",
    errors: errors
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
  const tokenUrl = authBaseUrl + "/validate_token";
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
  const authUrl = authBaseUrl + ((authAction === "log in")? '/sign_in': '' )

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
        dispatch(toggleLoading());
        dispatch(cleanErrors());
      })
      .catch((err) => {
        dispatch(toggleLoading());
        const errors = err.response.data.errors;
        let errString = '';
        if(errors.constructor === Array) {
          errString = errors[0];
        } else {
          errString = errors.full_messages[0];
        }
        dispatch(setErrors(errString))
      });
  }
}

export const validateInput = (data, authAction) => {
  let rules = {
    email: 'required|email',
    password: 'required|min:8'
  }

  if(authAction === 'sign up') {
    rules.name = 'required|min:4'
  }

  let validation = new Validator(data, rules);

  return (validation.passes()? (validateAuth(data, authAction))
    : (dispatch, getState) => { dispatch(setInputError(validation.errors))});
}
