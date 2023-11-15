import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './components/WatchPage'
import Body from './components/Body'
import MainContainer from './components/MainContainer'

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <Body />,
		children: [
			{
				path: '/',
				element: <MainContainer />,
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
