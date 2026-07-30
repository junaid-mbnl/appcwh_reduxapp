//the reducer in name is not about reducing amount but about the reducer concept.
//Since this is amount reducer so this will mess with amount (at least that is what we will make it to do)

const nemreducer = (state = 0, action) => {
  //it takes initial state - state=0 means if state not passed - take it zero by default, or take the passed state.
  //Second thing it takes - action
  if (action.type === "deposit") {
    return state + action.payload;
  } else if (action.type === "withdraw") {
    return state - action.payload;
  } else {
    return state;
  }
};
export default nemreducer;
