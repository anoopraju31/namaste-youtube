import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import user from '../assests/img/user.png'
import { toggleMenu } from '../redux/appSlice'
import SearchBar from './SearchBar'

const Header = () => {
	const dispatch = useDispatch()

	const toggleMenuHandler = () => {
		dispatch(toggleMenu())
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
				<SearchBar />
			</div>

			{/* user */}
			<div className='col-span-1 flex justify-end items-center'>
				<img className='w-8 h-8' src={user} alt='user' />
			</div>
		</header>
	)
}

export default Header
