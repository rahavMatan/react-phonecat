export default function(state={}, action){
  switch (action.type) {
    case 'getPhone':
      return action.payload;
    default:
      return state;
  }
}
