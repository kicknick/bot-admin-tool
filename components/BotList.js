import React, { PropTypes, Component } from 'react'
import BotCard from './BotCard'

export default class BotList extends Component {

	render() {
		var componentStyle =  {
		  placeholder: {
		    border: 'solid'
		  }
		}
		var botList = this.props.botList;
		return(
			<div style={componentStyle.placeholder}>
			<h2>Bots</h2>
        {botList.map(function(e, i) {
          return (
            <div key={e.name}>
            	<BotCard botEntry={e} currentHoverBot={this.props.currentHoverBot} currentBot={this.props.currentBot} mouseOverBotCard={this.props.mouseOverBotCard} clickBotCard={this.props.clickBotCard}/>
            </div>
          	)
      	}, this)}
			</div>
		)
	}
}


BotList.propTypes = {
	botList: PropTypes.array.isRequired,
	currentBot: PropTypes.object.isRequired,
	currentHoverBot: PropTypes.object.isRequired,
	mouseOverBotCard: PropTypes.func.isRequired,
	clickBotCard: PropTypes.func.isRequired
}