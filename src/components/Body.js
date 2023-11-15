import React from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import store from '../redux/store'
import Sidebar from './Sidebar'
import Header from './Header'

const Body = () => {
	return (
		<Provider store={store}>
			<div className=''>
				<Header />

				<div className='flex'>
					<Sidebar />
					<Outlet />
				</div>
			</div>
		</Provider>
	)
}

export default Body
