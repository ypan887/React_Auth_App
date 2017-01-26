const defaultState = { currentTab: 'log in' };

const toggleTab = (state = defaultState, action) => {
  switch (action.type){
    case "TOGGLE_TAB" :
      return {...state, currentTab: action.currentTab};
    default:
      return state;
  }
}

export default toggleTab;
