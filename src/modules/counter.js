// define action
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// action creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// init
const initialState = {
  number: 0,
};

// reducer
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE: {
      return {
        ...state,
        number: state.number + 1,
      };
    }
    case DECREASE: {
      return {
        ...state,
        number: state.number - 1,
      };
    }
    default:
      return state;
  }
}

export default counter;
