import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdSearch } from 'react-icons/io'
import user from '../assests/img/user.png'
import { toggleMenu } from '../redux/appSlice'
import { Link } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from '../utills/constants'
import {
	cacheSuggestions,
	removeSuggestions,
	searchQueryChange,
} from '../redux/searchSlice'

const Header = () => {
	const [suggestions, setSuggestions] = useState([])
	const [showSuggestions, setShowSuggestions] = useState(false)
	const searchQuery = useSelector((state) => state.search.searchQuery)
	const cachedSuggestions = useSelector(
		(state) => state.search.cachedSuggestions,
	)
	const dispatch = useDispatch()

	// Debouncing
	useEffect(() => {
		const timer = setTimeout(() => getSearchSuggestions(), 200)

		return () => {
			clearTimeout(timer)
		}
	}, [searchQuery])

	const getSearchSuggestions = async () => {
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

		const res = await fetch(YOUTUBE_SEARCH_API + searchQuery)
		const data = await res.json()

		setSuggestions(data[1])
		dispatch(cacheSuggestions({ searchQuery, suggestion: data[1] }))
		setShowSuggestions(true)
	}

	const toggleMenuHandler = () => {
		dispatch(toggleMenu())
	}

	const handleSearchQueryChange = (e) => {
		dispatch(searchQueryChange(e.target.value))
	}

	return (
		<header className='grid grid-flow-col p-5 hadow-sm'>
			<div className='col-span-1 flex items-center gap-4'>
				{/* Hamburger */}
				<div
					className='p-2 rounded-full cursor-pointer'
					onClick={toggleMenuHandler}>
					<RxHamburgerMenu size={28} />
				</div>

				{/* Logo */}
				<Link to='/' className=''>
					<img
						className='h-6'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png'
						alt='logo'
					/>
				</Link>
			</div>

			{/* Search Bar */}
			<div className='col-span-10 px-10 flex justify-center items-center'>
				<div className='relative w-2/3 max-w-lg'>
					<input
						className='w-full px-4 py-2 border border-gray-400 outline-none rounded-l-full'
						type='text'
						value={searchQuery}
						onChange={handleSearchQueryChange}
						placeholder='search'
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
					/>

					{showSuggestions && suggestions.length > 0 && (
						<ul className='absolute top-12 w-full min-w-fit min-w-lg py-2 bg-gray-200 rounded-xl z-50 flex flex-col gap-1'>
							{suggestions?.map((suggestion) => (
								<l1 className='px-4 py-1 cursor-pointer flex gap-2 items-center hover:bg-gray-50 whitespace-nowrap'>
									<IoMdSearch size={20} />
									<p className='font-bold'>{suggestion}</p>
								</l1>
							))}
						</ul>
					)}
				</div>
				<button className='px-4 py-2 border border-gray-400 outline-none  rounded-r-full'>
					<IoMdSearch size={24} />
				</button>
			</div>

			{/* user */}
			<div className='col-span-1 flex justify-end items-center'>
				<img className='w-8 h-8' src={user} alt='user' />
			</div>
		</header>
	)
}

export default Header
