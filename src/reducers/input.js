const defaultState = {
  email: '',
  password: '',
  name: '',
  nickname: ''
};

const input = (state = defaultState, action) => {
  switch (action.type){
    case 'GET_INPUT':
      return Object.assign({}, state, action.input);
    case 'EMPTY_INPUT':
      return defaultState;
    default:
      return state;
  }
}

export default input;
