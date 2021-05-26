/** @format */

import React, { useState, useEffect } from "react"

import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import AddTodo from "./AddTodo"

import axios from "axios"

const Todo = (props) => {
	const [todosUser, setTodoUser] = useState(null)
	const [showTodos, setShowTodos] = useState(false)
	const [mutation, setMutation] = useState(false)
	const [checkTodos, setCheckTodos] = useState([])
	useEffect(() => {
		setTodoUser(checkTodos)
	}, [mutation])
	const getTodos = async () => {
		const todos = await axios.get(`users/${props.id}/Todos`)
		setTodoUser(todos.data)
		setShowTodos(true)
	}
	const valueCheckbox = (checkbox) => {
		console.log("checkbox value", checkbox.id, checkbox.checked)
		const index = todosUser.findIndex((todo) => Number(checkbox.id) === todo.id)
		const newTodos = todosUser
		newTodos[index].completed = !todosUser[index].completed
		setCheckTodos(newTodos)
		setMutation(!mutation)
	}
	return (
		<div>
			{showTodos ? (
				<>
					<Button onClick={() => setShowTodos(false)} variant="outline-primary">
						Close the To-dos
					</Button>
					<AddTodo id_user={props.id} />
					<ListGroup className="d-flex flex-column-reverse" key={props.id}>
						{todosUser !== null ? (
							todosUser.map((todo) => {
								return (
									<div key={`item-${todo.id}`}>
										<ListGroup.Item className="m-2 p-3 " key={todo.id}>
											<input
												type="checkbox"
												checked={todo.completed}
												id={todo.id}
												onChange={(e) => {
													valueCheckbox(e.target)
												}}
												className="form-check-input"
											/>
											{todo.id}-{todo.title}
										</ListGroup.Item>
									</div>
								)
							})
						) : (
							<div> </div>
						)}
					</ListGroup>
				</>
			) : (
				<Button onClick={() => getTodos()} variant="outline-primary">
					show To-dos
				</Button>
			)}
		</div>
	)
}

export default Todo
