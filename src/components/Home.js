import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Home = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<MainContainer />
		</div>
	)
}

export default Home
