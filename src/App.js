import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './components/WatchPage'
import Body from './components/Body'
import MainContainer from './components/MainContainer'
import SearchPage from './components/SearchPage'
import Demo from './components/Demo'
import Demo2 from './components/Demo2'

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
				path: '/watch',
				element: <WatchPage />,
			},
			{
				path: '/result',
				element: <SearchPage />,
			},
			{
				path: '/demo',
				element: (
					<>
						<Demo />
						<Demo2 />
					</>
				),
			},
		],
	},
])

function App() {
	return <RouterProvider router={appRouter} />
}

export default App
