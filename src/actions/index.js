import axios from 'axios';

export function getAll(){
  console.log('getting');
  var req= axios.get('src/phones/phones.json')
    .then(function(res){
      console.log(res);
    },
  function(err){
    console.log(err);
  })
  return {
    type:'getAll',
    payload:req
  }
}
