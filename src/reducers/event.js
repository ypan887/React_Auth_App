const defaultState = {
  isLoading: false
};

const event = (state = defaultState, action) => {
  switch (action.type){
    case 'TOGGLE_LOADING':
      return Object.assign({}, state, {
        isLoading: !state.isLoading
      });
    default:
      return state;
  }
}

export default event;
