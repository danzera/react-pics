import React from 'react';

// SearchBar needs to be a class based component
// so we can utilize state for handling user input
class SearchBar extends React.Component {
	// state initilization
	state = {
		searchTerm: ''
	};

	// this function gets passed by reference below as a callback function
	// this is one general naming convention for event handlers
	onInputChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	}

	// onChange callback function automatically invoked any time the input is updated
	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text"
										value={this.state.searchTerm}
										onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
