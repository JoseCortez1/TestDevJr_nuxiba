/** @format */

import React, { useState } from "react"
import axios from "axios"
const Todo = () => {
	const [todosUser, setTodoUser] = useState(null)
	const getTodos = async () => {
		const todos = await axios.get(`users/${infoCard.id}/posts`)
		console.log(todos)
		setTodoUser(todos)
	}
	return (
		<div>
			<Button variant="outline-secondary">Secondary</Button>{" "}
		</div>
	)
}

export default Todo
