import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
	const [y, setY] = useState(0)
	let x = 10
	const z = useRef(0)
	const interval = useRef(null)

	useEffect(() => {
		interval.current = setInterval(() => {
			console.log('Rendering', Math.random())
		}, 1000)

		return () => clearInterval(interval.current)
	}, [])

	return (
		<div className='mx-4 p-6 bg-slate-500 border border-black w-96 h-96'>
			<div>
				<h1 className='font-bold text-xl my-4'> Let = {x}</h1>
				<button
					className='px-6 py-2 bg-green-500'
					onClick={() => {
						x += 1

						console.log(x)
					}}>
					{' '}
					Increase X{' '}
				</button>
			</div>

			<div>
				<h1 className='font-bold text-xl my-4'> State = {y}</h1>
				<button
					className='px-6 py-2 bg-green-500'
					onClick={() => {
						setY(y + 1)
					}}>
					{' '}
					Increase Y{' '}
				</button>
			</div>

			<div>
				<h1 className='font-bold text-xl my-4'> Ref = {z.current}</h1>
				<button
					className='px-6 py-2 bg-green-500'
					onClick={() => {
						z.current += 1
						console.log(z)
					}}>
					{' '}
					Increase Z{' '}
				</button>
			</div>

			<button
				onClick={() => {
					clearInterval(interval.current)
				}}
				className='bg-red-500 px-6 py-1 my-4 text-white font-bold rounded-lg'>
				{' '}
				Stop Printing{' '}
			</button>
		</div>
	)
}

export default Demo2
