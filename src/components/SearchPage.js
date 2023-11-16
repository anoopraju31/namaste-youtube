import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_API_URL } from '../utills/constants'
import VideoCard from './VideoCard'

const SearchPage = () => {
	const [results, setResults] = useState([])
	const [searchParams] = useSearchParams()

	useEffect(() => {
		getSearchResults()
	}, [])

	const getSearchResults = async () => {
		const searchQuery = searchParams.get('search_query')
		const res = await fetch(YOUTUBE_SEARCH_API_URL('snippet', searchQuery))
		const data = await res.json()

		if (!data?.items) return

		setResults(data.items)

		console.log(data.items)
	}

	return (
		<main className='px-4 mt-4 grid  gap-4'>
			{results.map((result) => {
				const info = {
					id: result.id.videoId,
					snippet: result.snippet,
					statistics: {
						viewCount: 0,
					},
				}

				return <VideoCard key={info?.id} info={info} isExtended />
			})}
		</main>
	)
}

export default SearchPage
