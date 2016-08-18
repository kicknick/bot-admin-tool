function RethinkAPI(conn, r) {
	var conn = conn;
	var r = r;


	var getTables = function(callback) {
		let promise = r.tableList().run(conn);
		promise.then(res => {
			callback(res);
		});
	}

	var getTable = function(tableName, callback) {
		let promise = r.table(tableName).run(conn);
		promise.then(cursor => {
	  	cursor.toArray(function(err, results) {
	    	if (err) throw err;
	    	callback(results);
	    });
		});
	}

	var getDialogues = function(botId, callback) {
		let promise = r.table('chats').filter({botId: botId}).run(conn);
		promise.then(cursor => {
	  	cursor.toArray(function(err, results) {
	    	if (err) throw err;
	    	callback(results);
	    });
		});
	}

	var updateMessage = function(messageId, note, status, callback) {
		var promise = r.table("chats").get(messageId).update({note: note, status: status}).run(conn);
		promise.then(res => {
			callback(res);
		})
	}


	return {
		getTables: getTables,
		getTable: getTable,
		getDialogues: getDialogues,
		updateMessage: updateMessage
	}
}



module.exports = RethinkAPI;