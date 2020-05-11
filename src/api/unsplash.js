import axios from 'axios';

// axios.create lets us create a customized copy of it
export default axios.create({
	baseUrl: 'https://api.unsplash.com/search/photos',
	headers: {
		Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
	}
});
