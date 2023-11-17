import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import searchReducer from './searchSlice'
import chatReducer from './chatSlics'

const store = configureStore({
	reducer: {
		app: appReducer,
		search: searchReducer,
		chat: chatReducer,
	},
})

export default store
