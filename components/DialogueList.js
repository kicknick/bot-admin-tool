import React, { PropTypes, Component } from 'react'
import Dialogue from './Dialogue'

export default class DialogueList extends Component {

	constructor(props) {
    super(props);
    this.state = {dialogues: props.dialogues};
  }

	componentWillReceiveProps(props) {
		// console.log(props);
		// this.setState(function(previousState, currentProps) {
		//   return {dialogues: this.props.dialogues};
		// });
		// this.setState({dialogues: props.dialogues})
  }


	render() {
		var componentStyle =  {
		  placeholder: {
		    border: 'solid'
		  }
		}
		// var dialogues = this.props.currentDialogues;
		return(
			<div style={componentStyle.placeholder}>
				<h2>Dialogues</h2> 
        {this.props.currentDialogues.map(function(e, i) {
          return (
            <div key={i}>
            	<Dialogue chat={e} currentChatId={this.props.currentChatId} chooseChat={this.props.chooseChat}/>	
            </div>
          	)
      	}, this)}
			</div>
		)
	}
}


DialogueList.propTypes = {
	currentDialogues: PropTypes.array.isRequired,
	currentChatId: PropTypes.string.isRequired,
	chooseChat: PropTypes.func.isRequired
}