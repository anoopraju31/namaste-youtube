import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchPage = () => {
	const [searchParams] = useSearchParams()
	console.log(searchParams.get('search_query'))
	return <main className='px-4 mt-4'>SearchPage</main>
}

export default SearchPage
