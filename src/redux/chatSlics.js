import { createSlice } from '@reduxjs/toolkit'
import { OFFSET_LIVE_CHAT } from '../utills/constants'

const chatSlice = createSlice({
	name: 'chat',
	initialState: {
		messages: [],
	},
	reducers: {
		addMessage: (state, action) => {
			state.messages.splice(OFFSET_LIVE_CHAT, 1)
			state.messages.unshift(action.payload)
			// state.messages = [action.payload, ...state.messages]
		},
	},
})

export const { addMessage } = chatSlice.actions
export default chatSlice.reducer
