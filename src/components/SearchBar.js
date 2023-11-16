import useSearch from '../hooks/useSearch'
import { IoMdSearch } from 'react-icons/io'
import SearchItem from './SearchItem'

const SearchBar = () => {
	const {
		searchQuery,
		showSuggestions,
		handleFocus,
		handleBlur,
		suggestions,
		handleSearchQueryChange,
	} = useSearch()

	return (
		<>
			<div onBlur={handleBlur} className='relative w-2/3 max-w-lg'>
				<input
					className='w-full px-4 py-2 border border-gray-400 outline-none rounded-l-full'
					type='text'
					value={searchQuery}
					onChange={handleSearchQueryChange}
					placeholder='search'
					onFocus={handleFocus}
				/>

				{showSuggestions && suggestions.length > 0 && (
					<ul className='absolute top-12 w-full min-w-fit min-w-lg py-2 bg-gray-200 rounded-xl z-50 flex flex-col gap-1'>
						{suggestions?.map((suggestion) => (
							<SearchItem key={suggestion} suggestion={suggestion} />
						))}
					</ul>
				)}
			</div>
			<button className='px-4 py-2 border border-gray-400 outline-none  rounded-r-full'>
				<IoMdSearch size={24} />
			</button>
		</>
	)
}

export default SearchBar
