import React, { PropTypes, Component } from 'react'

export default class Modal extends Component {

	saveComment() {
		console.log('saveComment')
	}
	changeText(obj) {
		console.log(obj.target.value)
	}

	render() {
		var componentStyle =  {
		  placeholder: {
		  	cursor: 'pointer',
		  	padding: 20
		  }
		}
		return(
			<div style={componentStyle.placeholder}>
				<textarea rows="2" onChange={this.changeText.bind(this)}></textarea>
				<div className="ui modal">
				  <i className="close icon"></i>
				  {/*<div className="header">
				    Profile Picture
				  </div>*/}
				  <textarea rows="2" onChange={this.changeText.bind(this)}></textarea>
					<div className="ui form">
						<textarea rows="2" onChange={this.changeText.bind(this)}></textarea>

					  <div className="grouped fields">

					    <div className="field">
					      <div className="ui radio checkbox">
					        <input type="radio" name="example2" />
					        <label>Warning</label>
					      </div>
					    </div>

					    <div className="field">
					      <div className="ui radio checkbox">
					        <input type="radio" name="example2" />
					        <label>Critical</label>
					      </div>
					    </div>

					    <div className="field">
					      <div className="ui radio checkbox">
					        <input type="radio" name="example2" />
					        <label>Resolved</label>
					      </div>
					    </div>

					  </div>

					</div>
				  <div className="actions">
				    <div className="ui positive right labeled icon button" >
				      DONE
				      <i className="checkmark icon"></i>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}


Modal.propTypes = {

}