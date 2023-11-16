import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
	return (
		<div className='flex flex-col gap-4'>
			{comments.map((comment) => (
				<Comment key={comment.id} data={comment} />
			))}
		</div>
	)
}

export default CommentsList
