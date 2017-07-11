
export default function(state=null, action){
  switch (action.type) {
    case 'getPhone':
      return action.payload.data;
    default:
      return state;
  }
}
