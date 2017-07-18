var Phone = require('./phone-model')
var PhoneListItem = require('./phone-list-item-model');
var fs = require('fs');



Phone.find({},function(err, res){
  if(!res.length){
    initPhones();
  };
})
PhoneListItem.find({},function(err,res){
  if(!res.length){
    initListItems();
  }
})

function initListItems(){
  var list = require('../src/phones/phones.json')
  list.forEach(function(phone){
    var ListItem=new PhoneListItem(phone)
    ListItem.save(function(err){
      if(err){
        console.log(err);
      }
    })
  })
}

function initPhones(){
  var fileNames = fs.readdirSync('../src/phones').filter(function(file){
    return file !== 'phones.json'
  });
  fileNames.forEach(function(file){
    var phone = new Phone(require(`../src/phones/${file}`));
    phone.save(function(err){
      if(err){
        console.log(err);
      }
    });
  })
}
