import React from 'react'
import CommentsList from './CommentsList'

const commentsData = [
	{
		id: 'comment-1',
		name: 'Anoop Raju',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
		replies: [],
	},
	{
		id: 'comment-2',
		name: 'Anoop Raju',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
		replies: [
			{
				id: 'comment-3',
				name: 'Anoop Raju',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
				replies: [],
			},
			{
				id: 'comment-4',
				name: 'Anoop Raju',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
				replies: [],
			},
		],
	},
	{
		id: 'comment-5',
		name: 'Anoop Raju',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
		replies: [
			{
				id: 'comment-6',
				name: 'Anoop Raju',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
				replies: [],
			},
		],
	},
	{
		id: 'comment-7',
		name: 'Anoop Raju',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
		replies: [
			{
				id: 'comment-8',
				name: 'Anoop Raju',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
				replies: [
					{
						id: 'comment-9',
						name: 'Anoop Raju',
						text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
						replies: [
							{
								id: 'comment-12',
								name: 'Anoop Raju',
								text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
								replies: [],
							},
						],
					},
				],
			},
		],
	},
	{
		id: 'comment-10',
		name: 'Anoop Raju',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
		replies: [],
	},
	{
		id: 'comment-11',
		name: 'Anoop Raju',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
		replies: [],
	},
]

const CommentsContainer = () => {
	return (
		<div className='m-5 p-2'>
			<h1 className='text-2xl font-bold mb-4'> Comments </h1>
			<CommentsList comments={commentsData} />
		</div>
	)
}

export default CommentsContainer
