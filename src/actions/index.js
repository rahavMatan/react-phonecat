import axios from 'axios';

export function getAll(){
  var req= axios.get('src/phones/phones.json');
  return {
    type:'getAll',
    payload:req
  }
}

export function getFiltered(text=" "){
  return {
    type:'getFiltered',
    payload:text
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
