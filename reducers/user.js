const initialState = {
	name: 'Nikita',
	age: 21
}

exports.user = (state = initialState, action) => {
	switch(action.type) {
		case 'CHANGE_AGE':
			return Object.assign({}, state, {age: 17})
		default:
			return state;
	}
}