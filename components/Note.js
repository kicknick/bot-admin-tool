import React, { PropTypes, Component } from 'react'

export default class Note extends Component {

 constructor(props) {
    super(props);
    console.log(props);
    this.state = {note: props.currentMessage.note, status: props.currentMessage.status};
  }

	onRadioChanged(e) {
		this.setState({status: e.currentTarget.value});
	}

	changeText(obj) {
		//this.props.onChangeText(obj.target.value);
		this.setState({note: obj.target.value});
	}

	saveComment() {
		console.log(this.props.currentMessage.id, this.state.note, this.state.status)
		this.props.done(this.props.currentMessage.id, this.props.currentBot.id, this.state.note, this.state.status)
	}

	componentWillReceiveProps(props) {
    props.currentMessage.note = props.currentMessage.note || '';
    this.setState({note: props.currentMessage.note});
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
				<textarea rows="5" onChange={this.changeText.bind(this)} value={this.state.note}></textarea> <br/>
				<input type="radio" name="title" value="Warning"  checked={this.state.status === 'Warning'} onChange={this.onRadioChanged.bind(this)} /> <b style={{color:'orange'}}>Warning</b><br/>
				<input type="radio" name="title" value="Critical" checked={this.state.status === 'Critical'} onChange={this.onRadioChanged.bind(this)}/> <b style={{color:'red'}}>Critical</b> <br/>
				<input type="radio" name="title" value="Resolved" checked={this.state.status === 'Resolved'} onChange={this.onRadioChanged.bind(this)} /><b style={{color:'grey'}}>Resolved</b> <br/>
				<button style={{}} onClick={this.saveComment.bind(this)}>DONE</button>
      </div>
		)
	}
}


Note.propTypes = {
	onChangeText: PropTypes.func.isRequired,
	done: PropTypes.func.isRequired,
	currentMessage: PropTypes.object.isRequired,
	currentBot: PropTypes.object.isRequired,
}

// Note.defaultProps = { currentMessage: {note: ''} };