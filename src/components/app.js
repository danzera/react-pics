import React from 'react';
import SearchBar from './SearchBar';
import '../css/app.css';

class App extends React.Component {

	// define callback function here and pass it to our <SearchBar /> component
	// this way our app component can have access
	onSearchSubmit(searchTerm) {
		console.log('app search', searchTerm);
	}

	render() {
		return (
			<div className="app ui container">
				{/* function name "onSubmit" here is a choice, not an obligation */}
				{/* <SearchBar /> is a custom component, so it's just a prop being passed down to our component */}
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
