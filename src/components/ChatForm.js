import useChatForm from '../hooks/useChatForm'

const ChatForm = () => {
	const { liveMessage, handleChange, handleSend } = useChatForm()

	return (
		<form className='p-4 flex' onSubmit={handleSend}>
			<input
				className='w-full bg-slate-200 rounded-l-xl px-4 py-3 outline-none'
				type='text'
				value={liveMessage}
				onChange={handleChange}
			/>
			<button className='px-4 rounded-r-xl bg-gray-500'> send </button>
		</form>
	)
}

export default ChatForm
