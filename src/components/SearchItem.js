import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdSearch } from 'react-icons/io'

const SearchItem = ({ suggestion }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/result?search_query=helloween')
	}
	return (
		<li
			onClick={handleClick}
			className='px-4 py-1 cursor-pointer flex gap-2 items-center hover:bg-gray-50 whitespace-nowrap'>
			<IoMdSearch size={20} />
			<p className='font-bold'>{suggestion}</p>
		</li>
	)
}

export default SearchItem
