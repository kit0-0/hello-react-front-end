const initialState = {
    greeting: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_GREETING':
        return { ...state, greeting: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  