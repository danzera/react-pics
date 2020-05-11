import React from 'react';

class ImageCard extends React.Component {
	render() {
		const { description, urls } = this.props.image;

		return (
			<div className="image-card">
				<img alt={description}
					src={urls.regular} 
				/>
			</div>
		);
	}
}

export default ImageCard;
