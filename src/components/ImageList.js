import React from 'react';
import { render } from '@testing-library/react';

const ImageList = props => {
	console.log(props.images)

	return (
		<div className="image-list">
			ImageList
		</div>
	);

}

export default ImageList;
