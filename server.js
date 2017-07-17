var express= require ('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./'))

var router = express.Router();

router.route('/phones')
  .get(function(req,res){
    res.json( require('./src/phones/phones.json'));
  })

router.route('/phones/:id')
  .get(function(req,res){
    res.json( require(`./src/phones/${req.params.id}.json`))
  })

app.use('/api', router);

app.get('/',function(req,res){
  res.send('index')
})

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
