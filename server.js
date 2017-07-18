var express= require ('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
var fs = require('fs');

var Phone = require('./database/phone-model')
var PhoneListItem = require('./database/phone-list-item-model');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./'))

var router = express.Router();

router.route('/phones')
  .get(function(req,res){
    PhoneListItem.find({},function(err,items){
      res.send(items)
    })
  //  res.json( require('./src/phones/phones.json'));
  })

router.route('/phones/:id')
  .get(function(req,res){
    var id = req.params.id;
    Phone.findOne({id:id},function(err,phone){
      if(err || !phone){
        res.send({type:'error'})
      } else {
        res.send(phone)
      }
    })

  })

app.use('/api', router);
app.use(function(req, res){
  res.sendFile(`${__dirname}/index.html`)
})


app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
