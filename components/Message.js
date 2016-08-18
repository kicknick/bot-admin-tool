import React, { PropTypes, Component } from 'react'
import Dialogue from './Dialogue'

export default class Message extends Component {

	createNote() {
		// $('.ui.modal').modal('show');
		// console.log(this.props.message)
		this.props.chooseMessage(this.props.message);
	}

	render() {
		var componentStyle =  {
		  placeholder: {
		    border: 'solid'
		  },
		  message: {
				cursor: 'pointer'
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
        <p onClick={this.createNote.bind(this)} style={st}>{this.props.message.text} <span style={{color: 'red'}}>{this.props.message.note} {this.props.message.status}</span></p>
      </div>
		)
	}
}


Message.propTypes = {
	message: PropTypes.object.isRequired,
	currentMessage: PropTypes.object.isRequired,
	chooseMessage: PropTypes.func.isRequired
}