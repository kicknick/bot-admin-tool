var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var RethinkAPI = require('./RethinkAPI');
const r = require('rethinkdb');
var bodyParser = require('body-parser');
var url = require('url');
var express = require('express');
var path = require('path');


var app = new (express)()
app.use("/semantic", express.static(path.join(__dirname, 'semantic')));
var port = 3000;


app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
  console.log(__dirname)
})



r.connect({ host: 'localhost', port: 28015 }).then(conn => {
	conn.use('advice_engine');
	var rethink = RethinkAPI(conn, r);
	rethink.getTables(function(res) {
		console.log(res);	
	});

	app.get("/getTables", function(req, res) {
		rethink.getTables(function(tables) {
	  	res.send(tables);
		});
	})

	app.get("/getTable", function(req, res) {
		var url_parts = url.parse(req.url, true);
		var query = url_parts.query;
		rethink.getTable(query.table, function(table) {
	  	res.send(table);
		});
	})

	app.get("/getDialogues", function(req, res) {
		var url_parts = url.parse(req.url, true);
		var query = url_parts.query;
		rethink.getDialogues(query.botId, function(dialogues) {
	  	res.send(dialogues);
		});
	});

	app.get("/updateMessage", function(req, res) {
		var url_parts = url.parse(req.url, true);
		var query = url_parts.query;
		console.log(query);
		rethink.updateMessage(query.id, query.text, query.status,  function(obj) {
	  	res.send(obj);
		});		
	})


});



// Connect to Rethinkdb
// r.connect({ host: 'localhost', port: 28015 }).then(conn => {
//   conn.use('advice_engine');
//   let promise = r.tableList().run(conn);
//   promise.then(res => {
//   	console.log(res);
//   });

//   promise.catch(err => {
//   	console.log(err);
//   })

//   r.table('chats').run(conn).then(cursor => {
// 	  	cursor.toArray(function(err, results) {
// 	    if (err) throw err;
// 	    console.log(results);
// 	});
//   })
// });




app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
