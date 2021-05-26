/** @format */

import React, { useState } from "react"

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Accordion from "react-bootstrap/Accordion"

import axios from "axios"

const Post = (props) => {
	const [postUser, setPostUser] = useState(null)
	const [comments, setComments] = useState(null)
	const [showComments, setShowComments] = useState(false)
	const getPosts = async () => {
		const posts = await axios.get(`users/${props.id}/posts`)
		console.log(posts)

		setPostUser(posts.data)
	}
	const getComments = async (id) => {
		const commentsRequest = await axios.get(`post/${id}/comments`)
		setComments(commentsRequest.data)
		setShowComments(true)
	}
	return (
		<div>
			<Button onClick={() => getPosts()} variant="outline-primary">
				POSTS
			</Button>{" "}
			{postUser !== null ? (
				postUser.map((post) => {
					return (
						<>
							<Card>
								<Card.Header>
									<Card.Title> {post.title} </Card.Title>
									<Card.Subtitle> {post.id} </Card.Subtitle>
								</Card.Header>
								<Card.Text>{post.body}</Card.Text>
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
														<Card.Body key={comment.id}>
															<Card.Subtitle>
																{" "}
																{comment.id}-{comment.name}
															</Card.Subtitle>
															<Card.Text>{comment.body}</Card.Text>
														</Card.Body>
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
											getComments(post.id)
										}}>
										Ver Comentarios
									</Button>
								)}
							</Card>
						</>
					)
				})
			) : (
				<div> </div>
			)}
		</div>
	)
}

export default Post
