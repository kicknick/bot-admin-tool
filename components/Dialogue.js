import React, { PropTypes, Component } from 'react'

export default class Dialogue extends Component {


	chooseDialog() {
		console.log(this.props.chat.id)
		this.props.chooseChat(this.props.chat.id);
	}

	render() {
		var componentStyle =  {
		  placeholder: {
		  	cursor: 'pointer',
		    border: (this.props.chat.id == this.props.currentChatId) ? 'solid' : ''
		  }
		}
		var warningCount = '';
		var criticalCount = '';
		var resolvedCount = '';
		var dialogue = this.props.chat.dialogues;
		for(var i in dialogue) {
			if(dialogue[i].status == 'Warning' && dialogue[i].note) warningCount+='|';
			else if(dialogue[i].status == 'Critical' && dialogue[i].note) criticalCount+='|';
			else if(dialogue[i].status == 'Resolved' && dialogue[i].note) resolvedCount+='|';
		}
		return(
			<div style={componentStyle.placeholder} >
				<b onClick={this.chooseDialog.bind(this)}> {this.props.chat.id} <br/> <span style={{color:'orange'}}>{warningCount}</span> <span style={{color:'red'}}>{criticalCount}</span> <span style={{color:'grey'}}>{resolvedCount}</span></b>
			</div>
		)
	}
}


Dialogue.propTypes = {
	currentChatId: PropTypes.string.isRequired,
	chat: PropTypes.object.isRequired,
	chooseChat: PropTypes.func.isRequired
}