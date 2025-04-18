export const exerciseOptions =  {
	method: 'GET',
	hostname: 'exercisedb.p.rapidapi.com',
	port: null,
	path: '/exercises/bodyPart/back?limit=10&offset=0',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	hostname: 'youtube-search-and-download.p.rapidapi.com',
	port: null,
	path: '/channel/about?id=UCE_M8A5yxnLfW0KghEeajjw',
	headers: {
		'x-rapidapi-key': 'process.env.REACT_APP_RAPID_API_KEY',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};


console.log('Fetching config from:', exerciseOptions.hostname);
console.log('With options:', exerciseOptions);

export const fetchData = async (url, options)=>{
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}