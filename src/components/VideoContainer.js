import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_LIST_API } from '../utills/constants'
import VideoCard from './VideoCard'

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
	}

	if (!videos) return null

	return (
		<div className='@container/main max-w-[1536px] px-4 py-2'>
			<div className='grid grid-cols-1 @sm/main:grid-cols-1 @xl/main:grid-cols-2 @4xl/main:grid-cols-3 @6xl/main:grid-cols-4 gap-3'>
				{videos.map((video) => (
					<VideoCard key={video?.id} info={video} />
				))}
			</div>
		</div>
	)
}

export default VideoContainer
