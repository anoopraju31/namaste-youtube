import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
	return (
		<div>
			{comments.map((comment) => (
				<Comment key={comment.id} data={comment} />
			))}
		</div>
	)
}

export default CommentsList
