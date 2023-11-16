import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../redux/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import RelatedVideos from './RelatedVideos'

const WatchPage = () => {
	const [searchParams] = useSearchParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(closeMenu())
	}, [])

	return (
		<main className='w-full px-4 flex gap-4'>
			<div className='w-full lg:w-2/3 flex flex-col gap-4'>
				<div className='w-full'>
					<iframe
						width='560'
						className='w-full aspect-video rounded-lg'
						src={`https://www.youtube.com/embed/${searchParams.get(
							'v',
						)}?&autoplay=1&mute=0&loop=1&controls=1&rel=0&showinfo=0`}
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen></iframe>
				</div>

				<div className='w-full lg:hidden'>
					<RelatedVideos />
				</div>

				<div className='w-full'>
					<CommentsContainer />
				</div>
			</div>

			<div className='hidden lg:block lg:w-1/3'>
				<RelatedVideos />
			</div>
		</main>
	)
}

export default WatchPage
