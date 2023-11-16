import React from 'react'
import user from '../assests/img/user.png'

const ChatMessage = ({ name, message }) => {
	return (
		<div className='px-4 py-1 flex items-center gap-4'>
			<img className='w-8 h-8' src={user} alt='user' />
			<div>
				<p className='font-bold'> {name} </p>
				<p> {message} </p>
			</div>
		</div>
	)
}

export default ChatMessage
