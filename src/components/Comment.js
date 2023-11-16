import React from 'react'
import user from '../assests/img/user.png'

const Comment = ({ data }) => {
	const { name, text, replies } = data
	return (
		<div className='p-2 flex gap-2 items-center bg-gray-100 rounded-lg'>
			<div className=''>
				<img className='w-8 h-8' src={user} alt='user' />
			</div>

			<div className=''>
				<p className='font-bold'> {name} </p>
				<p className='italic'> {text} </p>
			</div>
		</div>
	)
}

export default Comment
