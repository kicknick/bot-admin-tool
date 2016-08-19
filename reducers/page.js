const initialState = {
	botList: [],
	// bots: [
	// 	botName: 'bob', dialogues: ['dialog1': [{from: "robot", text: "I'm robot", ts: 1471268916.046}, {from: "1104137812957082", text: "I'm human", ts: 1471016196.431}], 'dialog2': []]
	// ]
		// [
		// 	{botName: 'Bob', forms: [1, 2, 3, 4]},
		// 	{botName: 'Mark', forms: [1, 2, 3]}
		// ],
	currentHoverBot:{},
	currentBot: {},
	currentDialogues: [],
	currentChatId: '', //chatId
	currentMessage: {note: ''},
}

exports.page = (state = initialState, action) => {
	switch(action.type) {
		case 'BOTLIST_LOADED':
			return Object.assign({}, state, {botList: action.payload})
		case 'MOUSE_OVER_BOT_CARD':
			return Object.assign({}, state, {currentHoverBot: action.payload})
		case 'BOT_CHOOSED':
			return Object.assign({}, state, {currentBot: action.payload, currentDialogue: {dialogues:[]}})
		case 'DIALOGUES_LOADED':
			return Object.assign({}, state, {currentDialogues: action.payload})
		case 'DIALOG_CHOOSED':
			return Object.assign({}, state, {currentChatId: action.payload})
		case 'MESSAGE_CHOOSED':
			return Object.assign({}, state, {currentMessage: action.payload})
		case 'TEXT_CHANGED':
			return Object.assign({}, state, {noteText: action.payload})
		case 'SET_YEAR':
			return Object.assign({}, state, {year: action.payload})
		case 'GET_PHOTOS_REQUEST':
			return Object.assign({}, state, {fetching: true})
		case 'GET_PHOTOS_SUCCESS':
			return Object.assign({}, state, {fetching: false})
		case 'MESSAGE_UPDATED':
			return state;
		default:
			return state;
	}
}