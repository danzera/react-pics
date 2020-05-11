import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import '../css/app.css';

class App extends React.Component {
	state = {
		images: []
	}

	// define callback function here and pass it to our <SearchBar /> component
	// this way our app component can have access
	// marking this function with "async" allows us to use the async-await syntax
	// prevents us from having to chain a ".then" on the end of the request
	onSearchSubmit = async searchTerm => {
		const response = await unsplash.get('https://api.unsplash.com/search/photos', {
			params: { query: searchTerm }
		});

		this.setState({ images: response.data.results });
	}

	render() {
		return (
			<div className="app ui container">
				{/* function name "onSubmit" here is a choice, not an obligation */}
				{/* <SearchBar /> is a custom component, so it's just a prop being passed down to our component */}
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
