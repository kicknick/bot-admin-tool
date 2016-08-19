import React, { PropTypes, Component } from 'react'
import Dialogue from './Dialogue'

export default class Message extends Component {

	createNote() {
		// $('.ui.modal').modal('show');
		// console.log(this.props.message)
		this.props.chooseMessage(this.props.message);
	}

	render() {
		var color = 'grey';
		if(this.props.message.status == 'Warning') {
			color = 'orange'
		}
		else if(this.props.message.status == 'Critical') {
			color = 'red'
		}

		var componentStyle =  {
		  placeholder: {
		    border: 'solid'
		  },
		  message: {
				cursor: 'pointer'
		  },
		 	status: {
		 		color: color 
		 	}

		}

		var addition = {};
		if(this.props.message.from != 'robot') {
			addition = {
				textAlign: 'right'
			}
		}
		else {
		}
		var st1 = Object.assign({}, componentStyle.message, { border: (this.props.message.id == this.props.currentMessage.id) ? 'solid':''});
		var st = Object.assign({}, st1, addition);
		return(
			<div>
        <p onClick={this.createNote.bind(this)} style={st}>{this.props.message.text} <span style={componentStyle.status}>{this.props.message.note}</span></p>
      </div>
		)
	}
}


Message.propTypes = {
	message: PropTypes.object.isRequired,
	currentMessage: PropTypes.object.isRequired,
	chooseMessage: PropTypes.func.isRequired
}