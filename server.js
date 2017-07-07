var express= require ('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();


router.route('/phones')
.get(function(req,res){
  res.json( require('./src/phones/phones.json'));
})

router.route('/phones/:phoneName')
.get(function(req,res){
  res.json( require(`./src/phones/${req.params.phoneName}.json`))
})

app.use('/api', router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
