import { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API_URL } from '../utills/constants'
import { useSearchParams } from 'react-router-dom'

const useSearchResults = () => {
	const [searchParams] = useSearchParams()
	const [results, setResults] = useState([])

	useEffect(() => {
		getSearchResults()
	}, [])

	const getSearchResults = async () => {
		const searchQuery = searchParams.get('search_query')
		const res = await fetch(YOUTUBE_SEARCH_API_URL('snippet', searchQuery))
		const data = await res.json()

		if (!data?.items) return

		setResults(data.items)
	}

	return results
}

export default useSearchResults
