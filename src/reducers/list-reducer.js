import _ from 'lodash';


export default function(state=[], action){
  switch (action.type) {
    case 'getAll':
      return action.payload.data;
    case 'getFiltered':
      return _.filter(state,function(phone){
        return _.includes(phone.name.toLowerCase(),action.payload.toLowerCase()) || _.includes(phone.snippet.toLowerCase(),action.payload.toLowerCase())
      });
    case 'sortBy':
      return _.sortBy(state,action.payload)
    default:
      return state;
  }
}
