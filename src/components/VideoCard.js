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

export const adVideoCard = (VideoCard) => {
	return ({ info }) => {
		return (
			<div className=''>
				<VideoCard info={info} />
				<div className='p-1 flex justify-between'>
					<p className='text-sm'>Ad</p>
					<p className='text-sm'> animal </p>
				</div>
			</div>
		)
	}
}

export default VideoCard
