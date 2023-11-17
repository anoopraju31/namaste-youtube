import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../redux/chatSlics'

const ChatForm = () => {
	const [liveMessage, setLiveMessage] = useState('')
	const dispatch = useDispatch()

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
		<form className='p-4 flex' onSubmit={handleSend}>
			<input
				className='w-full bg-slate-200 rounded-l-xl px-4 py-3 outline-none'
				type='text'
				value={liveMessage}
				onChange={handleChange}
			/>
			<button className='px-4 rounded-r-xl bg-gray-500'> send </button>
		</form>
	)
}

export default ChatForm
