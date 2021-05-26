/** @format */

import React, { useState } from "react"

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import axios from "axios"

import Comment from "./Comment"

const Post = (props) => {
	const [postUser, setPostUser] = useState(null)
	const [showPost, setShowPost] = useState(false)
	const getPosts = async () => {
		const posts = await axios.get(`users/${props.id}/posts`)
		setPostUser(posts.data)
		setShowPost(true)
	}

	return (
		<div>
			{showPost ? (
				<>
					<Button onClick={() => setShowPost(false)} variant="outline-primary">
						Cerrar Posts
					</Button>

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
										<Comment idPost={post.id} />
									</Card>
								</>
							)
						})
					) : (
						<div> </div>
					)}
				</>
			) : (
				<Button onClick={() => getPosts()} variant="outline-primary">
					Posts
				</Button>
			)}
		</div>
	)
}

export default Post
