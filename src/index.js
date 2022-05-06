import "./style/index.css"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Rare } from "./Rare"

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Rare />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
)
