export const YOUTUBE_VIDEO_LIST_API =
	'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=' +
	process.env.REACT_APP_YOUTUBE_API_KEY
