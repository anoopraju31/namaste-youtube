import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../redux/chatSlics'
import ChatMessage from './ChatMessage'
import { generateRandomName, makeRandomMessage } from '../utills/helper'

const LiveChat = () => {
	const messages = useSelector((state) => state.chat.messages)
	const dispatch = useDispatch()

	useEffect(() => {
		const interval = setInterval(() => {
			// API Polling
			console.log('API Polling')

			dispatch(
				addMessage({
					name: generateRandomName(),
					message: makeRandomMessage(20) + '🚀',
				}),
			)
		}, 2000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<section className='w-full px-2 py-6 bg-slate-100 rounded-lg'>
			<div className='px-4 pb-2'>
				<h2 className='text-lg font-bold'> Live Chat </h2>
			</div>
			<div className='h-[600px] py-2 overflow-auto'>
				{messages.map((message, idx) => (
					<ChatMessage
						key={idx}
						name={message.name}
						message={message.message}
					/>
				))}
			</div>
		</section>
	)
}

export default LiveChat
