import React from 'react'

const Button = ({ name }) => {
	return (
		<button className='px-5 py-2 m-2 rounded-lg bg-slate-300 outline-none'>
			{name}
		</button>
	)
}

export default Button
