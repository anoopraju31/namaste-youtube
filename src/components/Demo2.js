import React from 'react'

const Demo2 = () => {
	let x = 10
	return (
		<div className='mx-4 p-6 bg-slate-500 border border-black w-96 h-96'>
			<div>
				<h1 className='font-bold text-xl my-4'> Let = {x}</h1>
				<button
					className='px-6 py-2 bg-green-500'
					onClick={() => {
						x += 1
					}}>
					{' '}
					Increase X{' '}
				</button>
			</div>
		</div>
	)
}

export default Demo2
