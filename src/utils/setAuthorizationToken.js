import axios from 'axios';

export default function setAuthorizationToken(auth) {
  if (auth) {
    axios.defaults.headers.common['access-token'] = auth["access-token"];
    axios.defaults.headers.common['client'] = auth["client"];
    axios.defaults.headers.common['uid'] = auth["uid"];
  } else {
    delete axios.defaults.headers.common['access-token'];
    delete axios.defaults.headers.common['client'];
    delete axios.defaults.headers.common['uid'];
  };
}
