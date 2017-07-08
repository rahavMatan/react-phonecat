export default function(state={}, action){
  switch (action.type) {
    case 'getListe':
      return action.payload;
    default:
      return state;
  }
}
