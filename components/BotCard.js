import React, { PropTypes, Component } from 'react'

export default class BotCard extends Component {



	mouseOverCard() {
		this.props.mouseOverBotCard(this.props.botEntry);
	}

	clickCard() {
		this.props.clickBotCard(this.props.botEntry);
	}

	render() {
		var componentStyle =  {
		  placeholder: {
		  	cursor: 'pointer',
		    border: (this.props.botEntry.name == this.props.currentBot.name) ? 'solid' : ''
		  }
		}
		return(
			<div style={componentStyle.placeholder}>
				<b onClick={this.clickCard.bind(this)}>{this.props.botEntry.name}</b>
			</div>
		)
	}
}


BotCard.propTypes = {
	botEntry: PropTypes.object.isRequired,
	currentBot: PropTypes.object.isRequired,
	currentHoverBot: PropTypes.object.isRequired,
	mouseOverBotCard: PropTypes.func.isRequired,
	clickBotCard: PropTypes.func.isRequired,
}