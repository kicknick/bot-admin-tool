import React, { PropTypes, Component } from 'react'
import Message from './Message'

export default class Chat extends Component {

	getChatById(dialogues, chatId) {
		for(var i in dialogues) {
			if(dialogues[i].id == chatId) 
				return dialogues[i].dialogues
		}
		return [];
	}

	render() {
		var componentStyle =  {
		  placeholder: {
		    border: 'solid'
		  }
		}

		var chat = this.getChatById(this.props.currentDialogues, this.props.currentChatId)
		console.log(chat)
		return(
			<div style={componentStyle.placeholder}>
				<h2>Chat</h2>
				 {chat.map(function(e, i) {
          return (
            <div key={i}>	
            	<Message message={e} chat={chat} currentMessage={this.props.currentMessage}	chooseMessage={this.props.chooseMessage}/>
            </div>
          	)
      	}, this)}
			</div>
		)
	}
}


Chat.propTypes = {
	currentDialogues: PropTypes.array.isRequired,
	currentChatId: PropTypes.string.isRequired,
	chooseMessage: PropTypes.func.isRequired,
	currentMessage: PropTypes.object.isRequired,
}