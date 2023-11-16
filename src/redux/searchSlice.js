import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		searchQuery: '',
		suggestions: {},
	},
	reducers: {
		searchQueryChange: (state, action) => {
			state.searchQuery = action.payload
		},
		cacheSuggestions: (state, action) => {
			const { searchQuery, suggestion } = action.payload
			state.suggestions = { ...state.suggestions, [searchQuery]: suggestion }
		},
		removeSuggestions: (state) => {
			state.suggestions = {}
		},
	},
})

export const { searchQueryChange, cacheSuggestions, removeSuggestions } =
	searchSlice.actions

export default searchSlice.reducer
