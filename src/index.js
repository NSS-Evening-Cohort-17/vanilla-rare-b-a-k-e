import "./style/index.css"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Rare } from "./Rare"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Rare />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
)
