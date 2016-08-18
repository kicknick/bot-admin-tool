import React, { PropTypes, Component } from 'react'
import Dialogue from './Dialogue'

export default class DialogueList extends Component {

	render() {
		var componentStyle =  {
		  placeholder: {
		    border: 'solid'
		  }
		}
		var dialogues = this.props.dialogues;
		return(
			<div style={componentStyle.placeholder}>
				<h2>Dialogues</h2> 
        {dialogues.map(function(e, i) {
          return (
            <div key={i}>
            	<Dialogue dialogue={e} currentDialogue={this.props.currentDialogue} chooseDialog={this.props.chooseDialog}/>	
            </div>
          	)
      	}, this)}
			</div>
		)
	}
}


DialogueList.propTypes = {
	currentBot: PropTypes.object.isRequired,
	dialogues: PropTypes.array.isRequired,
	currentDialogue: PropTypes.object.isRequired,
	chooseDialog: PropTypes.func.isRequired
}