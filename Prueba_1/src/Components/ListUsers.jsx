/** @format */

//hooks
import React, { useState, useEffect } from "react"

//Libraries
import axios from "axios"

// Components
import CardItem from "./CardItem"

const ListUsers = () => {
	const [listusers, setListUsers] = useState(null)

	useEffect(() => {
		if (listusers === null) {
			getUser()
		}
	}, [listusers])

	const getUser = async () => {
		const JSONPlaceHolder = await axios.get("users")
		setListUsers(JSONPlaceHolder.data)
		console.log(listusers)
	}
	return (
		<div>
			{listusers !== null ? (
				listusers.map((user) => {
					console.log(user)
					return (
						<>
							<CardItem infoCard={user} />
						</>
					)
				})
			) : (
				<h1>No data</h1>
			)}
		</div>
	)
}

export default ListUsers
