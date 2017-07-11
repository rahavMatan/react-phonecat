var express= require ('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var router = express.Router();

// var allowCrossDomain = function(req, res, next) {
//   console.log('here2');
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,HEAD,PUT,POST,DELETE,PATCH');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//      res.header('Access-Control-Expose-Headers', 'tag, link, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes');
//     next();
// };

router.route('/phones')
  .get(function(req,res){
    res.json( require('./src/phones/phones.json'));
  })

router.route('/phones/:id')
  .get(function(req,res){
    res.json( require(`./src/phones/${req.params.id}.json`))
  })

app.use('/api', router);

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
