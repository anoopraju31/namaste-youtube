import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdSearch } from 'react-icons/io'
import user from '../assests/img/user.png'

const Header = () => {
	return (
		<header className='grid grid-flow-col p-5 hadow-sm'>
			<div className='col-span-1 flex items-center gap-4'>
				{/* Hamburger */}
				<div className='p-2 rounded-full'>
					<RxHamburgerMenu size={28} />
				</div>

				{/* Logo */}
				<div className=''>
					<img
						className='h-6'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png'
						alt='logo'
					/>
				</div>
			</div>

			{/* Search Bar */}
			<div className='col-span-10 px-10 flex items-center justify-center'>
				<input
					className='w-2/3 max-w-lg px-4 py-2 border border-gray-400 outline-none rounded-l-full'
					type='text'
					placeholder='search'
				/>
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
