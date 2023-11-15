export const YOUTUBE_VIDEO_LIST_API =
	'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=' +
	process.env.REACT_APP_YOUTUBE_API_KEY
export const YOUTUBE_CHANNEL_PROFILE_API_URL = (channelId) =>
	`https://www.googleapis.com/youtube/v3/channels?part=snippet&id+${channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
