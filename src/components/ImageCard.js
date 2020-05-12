import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			spans: 0
		}

		// React Refs give access to a single DOM element
		// refs are created in the constructor and assigned to instance variables
		// they are then passed to a particular JSX element as props
		this.imageRef = React.createRef();
	}

	setSpans = e => {
		const SPAN_HEIGHT = 10; // defined in ImageCard.css
		const imageHeight = this.imageRef.current.clientHeight;
		const spans = Math.ceil(imageHeight/SPAN_HEIGHT);

		this.setState({ spans });
	}

	componentDidMount() {
		// add event listener to the image
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	render() {
		const { description, urls } = this.props.image;

		return (
			<div className="image-card" style={{gridRowEnd: `span ${this.state.spans}`}}>
				<img 
					alt={description}
					ref={this.imageRef}
					src={urls.regular} 
				/>
			</div>
		);
	}
}

export default ImageCard;
