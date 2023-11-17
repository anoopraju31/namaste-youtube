import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
	name: 'chat',
	initialState: {
		messages: [],
	},
	reducers: {
		addMessage: (state, action) => {
			state.messages.unshift(action.payload)
			// state.messages = [action.payload, ...state.messages]
		},
	},
})

export const { addMessage } = chatSlice.actions
export default chatSlice.reducer
