import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	cacheSuggestions,
	removeSuggestions,
	searchQueryChange,
} from '../redux/searchSlice'
import { YOUTUBE_SEARCH_SUGGESTIONS_API_URL } from '../utills/constants'

const useSearch = () => {
	const [suggestions, setSuggestions] = useState([])
	const [showSuggestions, setShowSuggestions] = useState(false)
	const searchQuery = useSelector((state) => state.search.searchQuery)
	const cachedSuggestions = useSelector(
		(state) => state.search.cachedSuggestions,
	)

	const dispatch = useDispatch()

	const getSearchSuggestions = useCallback(async () => {
		if (!searchQuery) {
			setSuggestions([])
			setShowSuggestions(false)
			dispatch(removeSuggestions())
			return
		}

		if (cachedSuggestions[searchQuery]) {
			setShowSuggestions(cachedSuggestions[searchQuery])
			return
		}

		const res = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API_URL + searchQuery)
		const data = await res.json()

		setSuggestions(data[1])
		dispatch(cacheSuggestions({ searchQuery, suggestion: data[1] }))
		setShowSuggestions(true)
	}, [searchQuery, dispatch, cachedSuggestions])

	// Debouncing
	useEffect(() => {
		const timer = setTimeout(() => getSearchSuggestions(), 200)

		return () => {
			clearTimeout(timer)
		}
	}, [searchQuery, getSearchSuggestions])

	const handleSearchQueryChange = (e) => {
		dispatch(searchQueryChange(e.target.value))
	}

	const handleBlur = () => {
		setTimeout(() => setShowSuggestions(false), 300)
	}

	const handleFocus = () => setShowSuggestions(true)

	return {
		searchQuery,
		showSuggestions,
		handleFocus,
		handleBlur,
		suggestions,
		handleSearchQueryChange,
	}
}

export default useSearch
