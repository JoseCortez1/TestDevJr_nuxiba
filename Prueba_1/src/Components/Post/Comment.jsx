/** @format */

import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import axios from "axios"

const Comment = (props) => {
	const [comments, setComments] = useState(null)
	const [showComments, setShowComments] = useState(false)

	const getComments = async () => {
		const commentsRequest = await axios.get(`post/${props.idPost}/comments`)
		setComments(commentsRequest.data)
		setShowComments(true)
	}
	return (
		<div>
			{showComments ? (
				<>
					<Button
						block
						size="lg"
						variant="outline-secondary"
						onClick={() => {
							setShowComments(false)
						}}>
						Ocultar comentarios
					</Button>
					{comments !== null ? (
						comments.map((comment) => {
							return (
								<>
									<Card bg="dark" text="light" className="m-5 ">
										<Card.Body key={comment.id}>
											<Card.Subtitle>
												{" "}
												{comment.id}-{comment.name}
											</Card.Subtitle>
											<Card.Text>{comment.body}</Card.Text>
										</Card.Body>
									</Card>
								</>
							)
						})
					) : (
						<div> No Comments</div>
					)}
				</>
			) : (
				<Button
					block
					size="lg"
					variant="outline-primary"
					onClick={() => {
						getComments()
					}}>
					Ver Comentarios
				</Button>
			)}
		</div>
	)
}

export default Comment
