export const YOUTUBE_VIDEO_LIST_API =
	'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=' +
	process.env.REACT_APP_YOUTUBE_API_KEY
export const YOUTUBE_CHANNEL_PROFILE_API_URL = (channelId) =>
	`https://www.googleapis.com/youtube/v3/channels?part=snippet&id+${channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

export const YOUTUBE_SEARCH_SUGGESTIONS_API_URL =
	'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const YOUTUBE_SEARCH_API_URL = (query) =>
	`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
