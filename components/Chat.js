import React, { PropTypes, Component } from 'react'
import Message from './Message'

export default class Chat extends Component {


	render() {
		var componentStyle =  {
		  placeholder: {
		    border: 'solid'
		  }
		}
		var chat = this.props.currentDialogue.dialogues;
		return(
			<div style={componentStyle.placeholder}>
				<h2>Chat</h2>
				 {chat.map(function(e, i) {
          return (
            <div key={i}>	
            	<Message message={e} currentMessage={this.props.currentMessage}	chooseMessage={this.props.chooseMessage}/>
            </div>
          	)
      	}, this)}
			</div>
		)
	}
}


Chat.propTypes = {
	chooseMessage: PropTypes.func.isRequired,
	currentMessage: PropTypes.object.isRequired,
}