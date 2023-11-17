import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
	useEffect(() => {
		const interval = setInterval(() => {
			// API Polling
			console.log('API Polling')
		}, 2000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<section className='w-full p-2 bg-slate-100 rounded-lg'>
			<div className='px-4 pb-2'>
				<h2 className='text-lg font-bold'> Live Chat </h2>
			</div>
			<div className='h-[600px] py-2 overflow-auto'>
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
				<ChatMessage name='Askshay Saini' message='This namaste react live' />
			</div>
		</section>
	)
}

export default LiveChat
