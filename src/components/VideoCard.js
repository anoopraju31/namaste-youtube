import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ info }) => {
	if (!info) return null

	const { snippet, statistics, id } = info
	const { channelTitle, title, thumbnails } = snippet

	return (
		<Link to={`/watch?v=${id}`} className='w-full'>
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
		</Link>
	)
}

export default VideoCard
