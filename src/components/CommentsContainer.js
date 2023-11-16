import React from 'react'

const commentsData = [
	{
		name: 'Anoop Raju',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
		replies: [],
	},
	{
		name: 'Anoop Raju',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
		replies: [
			{
				name: 'Anoop Raju',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
				replies: [],
			},
			{
				name: 'Anoop Raju',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
				replies: [],
			},
		],
	},
	{
		name: 'Anoop Raju',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
		replies: [
			{
				name: 'Anoop Raju',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
				replies: [],
			},
		],
	},
	{
		name: 'Anoop Raju',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
		replies: [
			{
				name: 'Anoop Raju',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
				replies: [
					{
						name: 'Anoop Raju',
						text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
						replies: [
							{
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
		name: 'Anoop Raju',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
		replies: [],
	},
	{
		name: 'Anoop Raju',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus.',
		replies: [],
	},
]

const CommentsContainer = () => {
	return (
		<div className='m-5 p-2'>
			<h1 className='text-2xl font-bold'> Comments </h1>
		</div>
	)
}

export default CommentsContainer
