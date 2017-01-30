const defaultState = {
  email: '',
  password: '',
  name: '',
  nickname: '',
  errors: {}
};

const input = (state = defaultState, action) => {
  switch (action.type){
    case 'GET_INPUT':
      return Object.assign({}, state, action.input);
    case 'EMPTY_INPUT':
      return defaultState;
    case 'SET_INPUT_ERRORS':
      return Object.assign({}, state, action.errors);
    default:
      return state;
  }
}

export default input;
