var express     = require('express');
var path        = require('path');
var app         = express(); 
var bodyParser  = require('body-parser');
var db          = require('diskdb');

db.connect('data/', ['jframeworks']); // connect db and load collection

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/dist", express.static(path.resolve("./dist")));
app.use("/src", express.static(path.resolve("./src")));
app.use("/node_modules", express.static(path.resolve("./node_modules")));


var port = process.env.PORT || 9000;        // set our port
var router = express.Router();              // get an instance of the express Router

router.get('/jf', function(req, res) {
    var result = db.jframeworks.find();   
    res.json(result || {})
});

router.get('/jf/:id', function(req, res) {
    var result = db.jframeworks.findOne({_id:req.params.id});
    res.json(result || {});
});

router.post('/jf/add', function(req, res) {
    var result  = db.jframeworks.save(req.body);
    res.json({"status":"success","data":result});   
});

router.post('/jf/update',function(req, res){
    var data = req.body;
    var result  = db.jframeworks.update({_id:data._id},data,{multi:false,upsert:true});
    res.json({"status":"success","data":result});  
});

router.post('/jf/update/:id',function(req, res){
    var data = req.body;
    var result  = db.jframeworks.update({_id:req.params.id || data._id},data,{multi:false,upsert:true});
    res.json({"status":"success","data":result});  
});

router.post('/jf/delete',function(req, res){
    var data = req.body;
    var result = db.jframeworks.remove({_id:data._id},false);
    res.json({"status":"success","data":result})
});

router.post('/jf/delete/:id',function(req, res){
    var data = req.body;
    var result = db.jframeworks.remove({_id:req.params.id || data._id},false);
    res.json({"status":"success","data":result})
});

app.use('/api', router);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port);
console.log('Server started on port  ' + port);