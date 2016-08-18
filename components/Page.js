import React, { PropTypes, Component } from 'react'

export default class Page extends Component {

	changeYear(e) {
		this.props.setYear(+e.target.innerText);
	}

	fetchingPhotos(e) {
		
		this.props.getPhotos(this.props.year);
	}

	onRemovePhoto() {
		console.log(this.props.year)
		this.props.removeLastPhoto(this.props.year);
	}	

	render() {
		return(
			<div>
				<p>New type of page of {this.props.year} year consists {this.props.photos.length} photos</p>
				<p> 
        	<button onClick={this.changeYear.bind(this)}>2016</button>
        	<button onClick={this.changeYear.bind(this)}>2015</button>
        	<button onClick={this.changeYear.bind(this)}>2014</button>

        	<button onClick={this.fetchingPhotos.bind(this)}>Fetch photos</button>      	
        	{(this.props.fetching) ? <b>Loading</b>: <b>Loaded</b>}
				</p>
				<button onClick={this.onRemovePhoto}>remove last photo</button>
			</div>
		)
	}
}

Page.propTypes = {
	fetching: PropTypes.bool.isRequired,
  year: PropTypes.number.isRequired,
  photos: PropTypes.object.isRequired,
  setYear: PropTypes.func.isRequired,
  getPhotos: PropTypes.func.isRequired,
  removeLastPhoto: PropTypes.func.isRequired,
}