import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import Header from './Header'

const Body = () => {
	return (
		<div className=''>
			<Header />

			<div className='flex'>
				<Sidebar />
				<MainContainer />
			</div>
		</div>
	)
}

export default Body
