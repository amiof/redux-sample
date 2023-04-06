const initialState = {
  counter: 0,
};

const reducer2 = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER2":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREASE_COUNTER2":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
export default reducer2;
