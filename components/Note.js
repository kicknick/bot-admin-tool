import React, { PropTypes, Component } from 'react'

export default class Note extends Component {

 constructor(props) {
    super(props);
    this.state = {text: this.props.currentMessage.note, status: 'warning'};
  }


	changeText(obj) {
		//this.props.onChangeText(obj.target.value);
		this.setState({text: obj.target.value});
		console.log(this.state.text)
	}

	saveComment() {
		console.log(this.props.currentMessage.id, this.state.text, this.state.status)
		this.props.done(this.props.currentMessage.id, this.state.text, this.state.status)
	}

	render() {
		var componentStyle =  {
		  placeholder: {
		    border: 'solid',
		    position: 'fixed'
		  }
		}
		return(
			<div style={componentStyle.placeholder}>
				<h2>Mark message</h2>
				<textarea rows="5" onChange={this.changeText.bind(this)} ></textarea> <br/>
				<button onClick={this.saveComment.bind(this)}>DONE</button>
      </div>
		)
	}
}


Note.propTypes = {
	onChangeText: PropTypes.func.isRequired,
	done: PropTypes.func.isRequired,
	currentMessage: PropTypes.object.isRequired
}