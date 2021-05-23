const initialState = 0;
const oreo = (state = initialState, action) => {
  {
    switch (action.type) {
      case "INCREMENTOREO":
        return state + 1;
      case "DECREMENTOREO":
        return state === 0 ? 0 : state - 1;
      default:
        return state;
    }
  }
};
export default oreo;
