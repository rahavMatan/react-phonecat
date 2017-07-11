import axios from 'axios';
var url = 'src/phones/phones.json';
var serverUrl = 'http://localhost:3000'
var phones;
var orderBy="age";

export function getAll(){
  var req;
  if(!phones){
    req = axios.get(serverUrl+'/api/phones');
    req.then(function(res){
      phones = res.data
    });
  }
  var payload = phones ? phones : req;
  return {
    type:'getAll',
    payload
  }
}

export function getFiltered(text=""){
  return {
    type:'getFiltered',
    payload:{
      text,
      phones,
      orderBy
    }
  }
}

export function sortBy(field="age"){
  orderBy=field
  return {
    type:'sortBy',
    payload:field
  }
}
