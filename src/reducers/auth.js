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
    default:
      return state;
  }
}

export default auth;
