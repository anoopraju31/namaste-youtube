import React from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import store from '../redux/store'
import Header from './Header'

const Layout = () => {
	return (
		<Provider store={store}>
			<div>
				<Header />
				<Outlet />
			</div>
		</Provider>
	)
}

export default Layout
