import $ from "jquery";
import querystring from "querystring";

var getData = function(method, params, callback, errCallback) {
  var q = querystring.stringify(params);
  $.ajax({
    url: 'http://localhost:3000/'+method+'?'+q,
    // data: myData,
    type: 'GET',
    // crossDomain: true,
    // dataType: 'jsonp',
    success: function(data) {
      callback(data);
    },
    error: function(error) {
      errCallback(error);
    },
  });
}



export function setYear(year) {
	return {
		type: 'SET_YEAR',
		payload: year
	}
}

export function getPhotos(year) {
  return (dispatch) => {
    dispatch({
      type: 'GET_PHOTOS_REQUEST',
      payload: year
    })

    setTimeout(() => {
      dispatch({
        type: 'GET_PHOTOS_SUCCESS',
        payload: [1,2,3,4,5]
      })
    }, 1000)
  }
}


export function mouseOverBotCard(botEntry) {
	return {
  	type: 'MOUSE_OVER_BOT_CARD',
  	payload: botEntry
  }
}

export function getBotList() {
  return (dispatch) => {

    getData('getTable', {table: 'accounts'}, function(data) {
      var botList = [];
      for(var i in data) {
        botList.push({name:'bot'+i, id: data[i]['apiToken']});
      }
      console.log('botList', botList);
      dispatch({
        type: 'BOTLIST_LOADED',
        payload: botList
      })
    }, function(error) {
      console.log(error);
    })

    // $.ajax({
    //   url: 'http://localhost:3000/getTables',
    //   // data: myData,
    //   type: 'GET',
    //   crossDomain: true,
    //   // dataType: 'jsonp',
    //   success: function(data) {
    //     console.log(data);
    //     dispatch({
    //       type: 'DATA_LOADED',
    //       payload: data
    //     })
    //   },
    //   error: function() { console.log('load  error')},
    //   // beforeSend: setHeader
    // });
  }
}


export function clickBotCard(botEntry) {
  return (dispatch) => {
    dispatch({
      type: 'BOT_CHOOSED',
      payload: botEntry
    })

    var dialogues = [];
    getData('getDialogues', {botId: botEntry.id}, function(data) {
      console.log(data.length);
      var d = [];
      for(var i in data) {
        var dialogueId = data[i].dialogueId;
        var pushed = false;
        for(var j=0; j<d.length; j++) {
          if(d[j].id == dialogueId) {
            d[j].dialogues.push({text: data[i].text, from: data[i].from, ts: data[i].ts, id: data[i].id, note: data[i].note, status: data[i].status});
            pushed = true;
          }
        }
        if(pushed == false) {
          d.push({id: dialogueId, dialogues: [{text: data[i].text, from: data[i].from, ts: data[i].ts, id: data[i].id, note: data[i].note, status: data[i].status}]})
        }
      }

      /*Sorting*/
      for(var i in d) {
        var D = d[i].dialogues;
        console.log(D);
        D.sort(function(a, b) {
          if(a.ts > b.ts) {
            return 1;
          }
          if(a.ts < b.ts) {
            return -1;
          }
          return 0;
        });
      }


      console.log(d);
      dispatch({
        type: 'DIALOGUES_LOADED',
        payload: d
      })
    })
  }
}

export function chooseDialog(dialog) {
  return{
    type: 'DIALOG_CHOOSED',
    payload: dialog
  }
}

export function chooseMessage(message) {
  return{
    type: 'MESSAGE_CHOOSED',
    payload: message
  }
}

export function onChangeText(text) {
  return{
    type: 'TEXT_CHANGED',
    payload: text
  }
}

export function done(id, text, status) {
  return (dispatch) =>{
    getData('updateMessage', {id: id, text: text, status: status}, function(obj) {
      console.log(obj);
      dispatch({
        type: 'MESSAGE_UPDATED'
      })
    }, function(error) {
      console.log(error)
    });
  }
}






/*export function getDialogues() {
  console.log('Loading data...');
  return (dispatch) => {

    getData('getTable', {table: 'chats'}, function(data) {
      console.log(data);
      var bots = {};
      for(var i in data) {
        var botId = data[i]['botId'];
        var dialogueId = data[i]['dialogueId'];
        if(!bots[botId])
          bots[botId] = {};
        if(!bots[botId][dialogueId])
          bots[botId][dialogueId] = {};
        bots[botId][dialogueId].push({from: data[i]['dialogueId']['from'], text: data[i]['dialogueId']['text']})
      }
      dispatch({
        type: 'DIALOGUES_LOADED',
        payload: bots
      })
    }, function(error) {
      console.log(error);
    })

    // $.ajax({
    //   url: 'http://localhost:3000/getTables',
    //   // data: myData,
    //   type: 'GET',
    //   crossDomain: true,
    //   // dataType: 'jsonp',
    //   success: function(data) {
    //     console.log(data);
    //     dispatch({
    //       type: 'DATA_LOADED',
    //       payload: data
    //     })
    //   },
    //   error: function() { console.log('load  error')},
    //   // beforeSend: setHeader
    // });
  }
}
*/