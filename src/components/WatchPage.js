import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../redux/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
	const [searchParams] = useSearchParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(closeMenu())
	}, [])

	return (
		<div>
			<iframe
				width='560'
				height='315'
				src={`https://www.youtube.com/embed/${searchParams.get(
					'v',
				)}?&autoplay=1&rel=0`}
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen></iframe>
		</div>
	)
}

export default WatchPage
