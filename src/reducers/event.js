const defaultState = {
  isLoading: false,
  error: ''
};

const event = (state = defaultState, action) => {
  switch (action.type){
    case 'TOGGLE_LOADING':
      return Object.assign({}, state, {
        isLoading: !state.isLoading
      });
    case 'SET_ERRORS':
      return Object.assign({}, state, {
        error: action.error
      });
    case 'CLEAN_ERRORS':
      return Object.assign({}, state, {
        error: ''
      });
    default:
      return state;
  }
}

export default event;
