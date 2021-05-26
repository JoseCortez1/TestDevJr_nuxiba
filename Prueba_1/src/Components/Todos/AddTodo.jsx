/** @format */

import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/esm/Card"

import axios from "axios"
import Swal from "sweetalert2"
const AddTodo = (props) => {
	const [data, setData] = useState({ completed: false, title: "" })
	const newTodo = async () => {
		console.log("data", data)
		if (data.title.trim() !== "") {
			const add = await axios.post(`users/${props.id_user}/todos`, data)
			console.log(add)
			if (add.data.id === 201) {
				Swal.fire({
					icon: "success",
					title: "Task added",
					text: "Your task was add",
				})
			}
		} else {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "You need add a title",
			})
		}
	}
	const handleChange = (e) => {
		const { target } = e
		switch (target.name) {
			case "title":
				console.log(target.value, target.name)
				setData({ ...data, [target.name]: target.value })
				break
			case "completed":
				console.log(target.checked, target.name)
				setData({ ...data, [target.name]: target.checked })
				break
			default:
				throw console.error("You shouldn't be here")
		}
	}
	return (
		<Card bg="light" text="dark" className="p-4 m-1">
			<Form>
				<h4>Add to Do</h4>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						name="title"
						placeholder="Add title to do"
						autoComplete="new-text"
						onChange={handleChange}
					/>
					<Form.Text className="text-muted">
						This will be the title of your task
					</Form.Text>
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<Form.Check
						onChange={handleChange}
						type="checkbox"
						name="completed"
						label="Done"
					/>
				</Form.Group>

				<Button
					variant="primary"
					onClick={() => {
						newTodo()
					}}>
					Add task
				</Button>
			</Form>
		</Card>
	)
}

export default AddTodo
