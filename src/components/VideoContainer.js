import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_LIST_API } from '../utills/constants'

const VideoContainer = () => {
	const [videos, setVideos] = useState([])

	useEffect(() => {
		getVideos()
	}, [])

	const getVideos = async () => {
		const res = await fetch(YOUTUBE_VIDEO_LIST_API)
		const data = await res.json()

		if (!data.items) return

		setVideos(data?.items)
		console.log(data.items)
	}

	return <div>VideoContainer</div>
}

export default VideoContainer
