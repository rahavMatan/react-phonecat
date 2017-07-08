import axios from 'axios';
var phones;

export function getAll(){
  var req= axios.get('src/phones/phones.json')
  req.then(function(res){
    phones =res.data
  });
  return {
    type:'getAll',
    payload:req
  }
}

export function getFiltered(text=""){
  return {
    type:'getFiltered',
    payload:{
      text,
      phones
    }
  }
}
export function sortBy(field='age'){
  return {
    type:'sortBy',
    payload:field
  }
}

export function orderBy(field){

}
