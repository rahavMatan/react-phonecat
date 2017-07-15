import _ from 'lodash';

function filter(arr,text){
  return _.filter(arr,function(phone){
    return _.includes(phone.name.toLowerCase(),text.toLowerCase()) || _.includes(phone.snippet.toLowerCase(),text.toLowerCase())
  });
}

function sort(arr,field){
  return _.sortBy( arr,(phone)=>{
    return  field=='age' ? phone[field] : phone[field].toLowerCase();
  })
}

export default function(state=[], action){
  switch (action.type) {
    case 'getAll':
      return action.payload.data || action.payload; //if payload is a promise then it has a data property..

    case 'getFiltered':
      var {text,phones, orderBy}=action.payload;
      return sort( filter(phones,text), orderBy);

    case 'sortBy':
      return sort(state, action.payload)

    default:
      return state;
  }
}
