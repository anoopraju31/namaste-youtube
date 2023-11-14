import React, { useEffect } from 'react'
import { YOUTUBE_VIDEO_LIST_API } from '../utills/constants'

const VideoContainer = () => {
	useEffect(() => {
		getVideos()
	}, [])

	const getVideos = async () => {
		const res = await fetch(YOUTUBE_VIDEO_LIST_API)
		const data = await res.json()

		console.log(data.items)
	}

	return <div>VideoContainer</div>
}

export default VideoContainer
