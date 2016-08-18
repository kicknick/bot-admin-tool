import React, { PropTypes, Component } from 'react'

export default class Dialogue extends Component {


	chooseDialog() {
		this.props.chooseDialog(this.props.dialogue);
	}

	render() {
		var componentStyle =  {
		  placeholder: {
		  	cursor: 'pointer',
		    border: (this.props.dialogue.id == this.props.currentDialogue.id) ? 'solid' : ''
		  }
		}
		var currentDialogue = this.props.currentDialogue;
		return(
			<div style={componentStyle.placeholder} >
				<b onClick={this.chooseDialog.bind(this)}> {this.props.dialogue.id} </b>
			</div>
		)
	}
}


Dialogue.propTypes = {
	currentDialogue: PropTypes.object.isRequired,
	dialogue: PropTypes.object.isRequired,
	chooseDialog: PropTypes.func.isRequired
}