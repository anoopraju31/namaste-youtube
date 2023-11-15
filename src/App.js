import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/watch/:id',
				element: <WatchPage />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={appRouter} />
}

export default App
