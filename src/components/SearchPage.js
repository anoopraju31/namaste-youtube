import VideoCard from './VideoCard'
import useSearchResults from '../hooks/useSearchResults'

const SearchPage = () => {
	const results = useSearchResults()

	return (
		<main className='px-4 mt-4 grid  gap-4'>
			{results.map((result) => {
				const info = {
					id: result.id.videoId,
					snippet: result.snippet,
					statistics: {
						viewCount: 0,
					},
				}

				return <VideoCard key={info?.id} info={info} isExtended />
			})}
		</main>
	)
}

export default SearchPage
