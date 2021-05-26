/** @format */
import ListUsers from "./Components/ListUsers"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"
function App() {
	return (
		<div className="App">
			<ListUsers />
		</div>
	)
}

export default App
