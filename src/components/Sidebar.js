import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
	const isMenuOpen = useSelector((state) => state.app.isMenuOpen)

	if (!isMenuOpen) return null

	return (
		<aside className='p-5 shadow-lg bg-slate-200 w-72 absolute xl:relative z-10'>
			<ul>
				<li className='w-full px-3 py-1 text-base font-bold'>
					{' '}
					<Link className='w-full' to='/'>
						Home
					</Link>{' '}
				</li>
				<li className='w-full px-3 py-1 text-base font-bold'> Shorts </li>
				<li className='w-full px-3 py-1 text-base font-bold'> Video </li>
				<li className='w-full px-3 py-1 text-base font-bold'> Live </li>
			</ul>

			<h2 className='font-bold text-center py-3'> Subscriptions </h2>
			<ul>
				<li className='w-full px-3 py-1 text-base font-bold'> Music </li>
				<li className='w-full px-3 py-1 text-base font-bold'> Sports </li>
				<li className='w-full px-3 py-1 text-base font-bold'> Gaming </li>
				<li className='w-full px-3 py-1 text-base font-bold'> Movies </li>
			</ul>

			<h2 className='font-bold text-center py-3'> Watchlist </h2>
			<ul>
				<li className='w-full px-3 py-1 text-base font-bold'> Music </li>
				<li className='w-full px-3 py-1 text-base font-bold'> Sports </li>
				<li className='w-full px-3 py-1 text-base font-bold'> Gaming </li>
				<li className='w-full px-3 py-1 text-base font-bold'> Movies </li>
			</ul>
		</aside>
	)
}

export default Sidebar
