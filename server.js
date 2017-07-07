var express= require ('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')

//app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//var router = express.Router();

var allowCrossDomain = function(req, res, next) {
  console.log('here2');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,HEAD,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
     res.header('Access-Control-Expose-Headers', 'tag, link, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes');
    next();
};
//router.use(allowCrossDomain)
// router.route('/phones')
//   .get(cors(),function(req,res){
//     console.log('req');
//     res.json( require('./src/phones/phones.json'));
//   })
//
// router.route('/phones/:phoneName')
//   .get(function(req,res){
//     res.json( require(`./src/phones/${req.params.phoneName}.json`))
//   })

//app.use('/api', router);
app.use(function(req, res, next) {
  console.log('getting');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/phones', function(req, res, next) {
  res.send('hello')
});
app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
