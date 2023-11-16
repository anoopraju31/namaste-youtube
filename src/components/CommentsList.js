import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
	return (
		<div className='flex flex-col gap-4'>
			{comments.map((comment) => (
				<div key={comment.id}>
					<Comment data={comment} />
					{comment?.replies?.length > 0 && (
						<div className='pl-5 border border-y-0 border-r-0 border-l-black ml-5'>
							<CommentsList comments={comment.replies} />
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default CommentsList
