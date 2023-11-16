import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_API_URL } from '../utills/constants'

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
		<main className='px-4 mt-4'>
			{results.map((result) => (
				<p className='my-2' key={result.etag}>
					{' '}
					{result.snippet.title}{' '}
				</p>
			))}
		</main>
	)
}

export default SearchPage
