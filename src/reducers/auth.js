const defaultState = {
  userName: '',
  isAuthenticated: false
};

const auth = (state = defaultState, action) => {
  switch (action.type){
    case 'LOGGED_IN':
      return Object.assign({}, state, {
        userName: action.userName, isAuthenticated: true
      });
    case 'LOGGED_OUT':
      return Object.assign({}, state, defaultState)
    default:
      return state;
  }
}

export default auth;
