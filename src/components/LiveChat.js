import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../redux/chatSlics'
import ChatMessage from './ChatMessage'
import { generateRandomName, makeRandomMessage } from '../utills/helper'

const LiveChat = () => {
	const [liveMessage, setLiveMessage] = useState('')
	const messages = useSelector((state) => state.chat.messages)
	const dispatch = useDispatch()

	useEffect(() => {
		const interval = setInterval(() => {
			// API Polling

			dispatch(
				addMessage({
					name: generateRandomName(),
					message: makeRandomMessage(20) + '🚀',
				}),
			)
		}, 1500)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const handleChange = (e) => {
		setLiveMessage(e.target.value)
	}

	const handleSend = (e) => {
		e.preventDefault()

		if (!liveMessage) return

		dispatch(
			addMessage({
				name: 'Anoop raju',
				message: liveMessage,
			}),
		)

		setLiveMessage('')
	}

	return (
		<section className='w-full px-2 py-6 bg-slate-100 rounded-lg'>
			<div className='px-4 pb-2'>
				<h2 className='text-lg font-bold'> Live Chat </h2>
			</div>
			<div className='h-[600px] py-2 overflow-auto flex flex-col-reverse'>
				{messages.map((message, idx) => (
					<ChatMessage
						key={idx}
						name={message.name}
						message={message.message}
					/>
				))}
			</div>
			<form className='p-4 flex' onSubmit={handleSend}>
				<input
					className='w-full bg-slate-200 rounded-l-xl px-4 py-3 outline-none'
					type='text'
					value={liveMessage}
					onChange={handleChange}
				/>
				<button className='px-4 rounded-r-xl bg-gray-500'> send </button>
			</form>
		</section>
	)
}

export default LiveChat
