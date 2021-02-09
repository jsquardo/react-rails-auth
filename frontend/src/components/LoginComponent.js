import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUser } from "../actions/userActions"

const LoginComponent = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleChange = (e) => {
		setUsername(e.target.value)
		setPassword(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(username, password)
	}
}
