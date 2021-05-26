/** @format */

import React, { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import Modal from "react-bootstrap/Modal"
import Post from "./Post/Post"
import Todo from "./Todos/Todo"

const CardItem = (props) => {
	const [infoCard, setInfoCard] = useState(null)
	const [modalShow, setModalShow] = useState(false)

	useEffect(() => {
		console.log("CARD info", props.infocard)
		setInfoCard(props.infoCard)
	}, [props.infocard])

	return (
		<>
			{infoCard === null ? (
				<div>Missing info</div>
			) : (
				<div key={infoCard.id}>
					<Button
						block
						size="lg"
						variant="outline-primary"
						onClick={() => {
							setModalShow(true)
						}}>
						{infoCard.username}
					</Button>{" "}
					<Modal
						show={modalShow}
						onHide={() => setModalShow(false)}
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered>
						<Card bg="linght" key={infoCard.id} text="dark" className="mb-2">
							<Card.Header>{infoCard.name}</Card.Header>
							<Card.Body>
								<Card.Title> {infoCard.username} </Card.Title>
								<Card.Text>
									<h5>Address</h5>
									<p>
										{" "}
										<strong>Street :</strong> {infoCard.address.street}
									</p>
									<p>
										{" "}
										<strong>City :</strong> {infoCard.address.city}
									</p>
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<Post id={infoCard.id} />
								<Todo id={infoCard.id} />
							</Card.Footer>
						</Card>
					</Modal>
				</div>
			)}
		</>
	)
}
export default CardItem
