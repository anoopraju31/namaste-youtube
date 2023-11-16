import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
	return (
		<section>
			{comments.map((comment) => (
				<div className='mt-4' key={comment.id}>
					<Comment data={comment} />
					{comment?.replies?.length > 0 && (
						<div className='pl-5 border border-y-0 border-r-0 border-l-black ml-5'>
							<CommentsList comments={comment.replies} />
						</div>
					)}
				</div>
			))}
		</section>
	)
}

export default CommentsList
