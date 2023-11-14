import React from 'react'
import Button from './Button'

const ButtonList = () => {
	return (
		<div className='p-3 flex gap-3'>
			<Button name='All' />
			<Button name='Gaming' />
			<Button name='Sports' />
			<Button name='Music' />
			<Button name='Live' />
			<Button name='News' />
		</div>
	)
}

export default ButtonList
