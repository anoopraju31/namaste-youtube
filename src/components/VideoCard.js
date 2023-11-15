import React from 'react'
import { YOUTUBE_CHANNEL_PROFILE_API_URL } from '../utills/constants'

const VideoCard = ({ info }) => {
	console.log(info)

	if (!info) return null

	const { snippet, statistics } = info
	const { channelTitle, title, thumbnails } = snippet

	return (
		<div className='w-full'>
			<div className='w-full'>
				<img
					className='w-full rounded-xl'
					src={thumbnails?.medium?.url}
					alt='video thumbnail'
				/>
			</div>

			<div className='w-full px-2 pt-2'>
				<h3 className='truncate font-medium'> {title} </h3>
				<p className=''>{channelTitle}</p>

				<div className='flex gap-2 text-sm'>
					<p> {statistics.viewCount} views </p>
				</div>
			</div>
		</div>
	)
}

export default VideoCard
