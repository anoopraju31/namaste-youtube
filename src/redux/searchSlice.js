import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		searchQuery: '',
		cachedSuggestions: {},
	},
	reducers: {
		searchQueryChange: (state, action) => {
			state.searchQuery = action.payload
		},
		cacheSuggestions: (state, action) => {
			const { searchQuery, suggestion } = action.payload
			state.cachedSuggestions = {
				...state.cachedSuggestions,
				[searchQuery]: suggestion,
			}
		},
		removeSuggestions: (state) => {
			state.cachedSuggestions = {}
		},
	},
})

export const { searchQueryChange, cacheSuggestions, removeSuggestions } =
	searchSlice.actions

export default searchSlice.reducer
