import _ from 'lodash';


export default function(state=[], action){
  switch (action.type) {
    case 'getAll':
      return action.payload.data;
    case 'getFiltered':
     var {text,phones}=action.payload;
      console.log(text);
      return _.filter(phones,function(phone){
        return _.includes(phone.name.toLowerCase(),text.toLowerCase()) || _.includes(phone.snippet.toLowerCase(),text.toLowerCase())
      });
    case 'sortBy':
      return _.sortBy( state,(phone)=>(phone[action.payload].toLowerCase() ) )
    default:
      return state;
  }
}
