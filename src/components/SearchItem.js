import React from 'react'
import { IoMdSearch } from 'react-icons/io'

const SearchItem = ({ suggestion }) => {
	return (
		<l1 className='px-4 py-1 cursor-pointer flex gap-2 items-center hover:bg-gray-50 whitespace-nowrap'>
			<IoMdSearch size={20} />
			<p className='font-bold'>{suggestion}</p>
		</l1>
	)
}

export default SearchItem
