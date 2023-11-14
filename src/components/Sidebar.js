import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
	const isMenuOpen = useSelector((state) => state.app.isMenuOpen)

	if (!isMenuOpen) return null

	return (
		<aside className='p-5 shadow-lg bg-slate-200 w-60'>
			<ul>
				<li className='px-3 py-1 text-base font-bold'> Home </li>
				<li className='px-3 py-1 text-base font-bold'> Shorts </li>
				<li className='px-3 py-1 text-base font-bold'> Video </li>
				<li className='px-3 py-1 text-base font-bold'> Live </li>
			</ul>

			<h2 className='font-bold text-center py-3'> Subscriptions </h2>
			<ul>
				<li className='px-3 py-1 text-base font-bold'> Music </li>
				<li className='px-3 py-1 text-base font-bold'> Sports </li>
				<li className='px-3 py-1 text-base font-bold'> Gaming </li>
				<li className='px-3 py-1 text-base font-bold'> Movies </li>
			</ul>

			<h2 className='font-bold text-center py-3'> Watchlist </h2>
			<ul>
				<li className='px-3 py-1 text-base font-bold'> Music </li>
				<li className='px-3 py-1 text-base font-bold'> Sports </li>
				<li className='px-3 py-1 text-base font-bold'> Gaming </li>
				<li className='px-3 py-1 text-base font-bold'> Movies </li>
			</ul>
		</aside>
	)
}

export default Sidebar
