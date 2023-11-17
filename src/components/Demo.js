import React, { useState } from 'react'

const Demo = () => {
	const [number, setNumber] = useState(0)

	console.log('Rendering...')

	return (
		<div className='w-96 h-96 border border-black p-6'>
			<div className='w-full flex justify-center'>
				<input
					type='number'
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					className='w-72 px-4 py-2 border border-black rounded-lg'
				/>
			</div>

			<div className='p-6'>
				<h1 className='font-bold'> Prime : {number} </h1>
			</div>

			<div className='flex justify-center'>
				<button className='w-full mx-6 px-6 py-2 rounded-lg font-bold text-white bg-green-500'>
					{' '}
					Toggle{' '}
				</button>
			</div>
		</div>
	)
}

export default Demo
