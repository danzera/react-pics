import React from 'react';

// SearchBar needs to be a class based component
// so we can utilize state for handling user input
class SearchBar extends React.Component {


	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
