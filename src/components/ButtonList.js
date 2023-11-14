import React from 'react'
import Button from './Button'

const list = ['All', 'Gaming', 'Sports', 'Music', 'Live', 'News', 'Football']

const ButtonList = () => {
	return (
		<div className='w-full overflow-auto p-3 flex gap-3'>
			{list.map((name) => (
				<Button key={name} name={name} />
			))}
		</div>
	)
}

export default ButtonList
