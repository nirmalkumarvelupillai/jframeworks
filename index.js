var express    = require('express');
var app        = express(); 
var bodyParser = require('body-parser');

var db = require('diskdb');
db.connect('data/', ['jframeworks']);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9000;        // set our port

var router = express.Router();              // get an instance of the express Router

router.get('/jflist', function(req, res) {
    res.json(db.jframeworks.find());   
});

router.post('/jflist/add', function(req, res) {
    var stat  = db.jframeworks.save(req.body);
    res.json({"status":"success"});   
});

app.use('/api', router);

app.listen(port);
console.log('Server started on port ' + port);