import React from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game";

class App extends React.Component { 
	render() {
		return (
			<Game />
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
