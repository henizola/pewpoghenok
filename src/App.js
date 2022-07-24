import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ModalProvider } from "./context/modalContext";
import Routes from "./Routes";

function App() {
	return (
		<Router>
			<div className='App'>
				<ModalProvider>
					<Routes />
				</ModalProvider>
			</div>
		</Router>
	);
}

export default App;
