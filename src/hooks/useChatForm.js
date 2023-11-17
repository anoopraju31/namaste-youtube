import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../redux/chatSlics'

const useChatForm = () => {
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

	return {
		liveMessage,
		handleChange,
		handleSend,
	}
}

export default useChatForm
