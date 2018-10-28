import React from "react";
import ReactDOM from "react-dom";
import _ from 'lodash';

import Header from "./components/Header";
import Stars from "./components/Stars";
import Button from "./components/Button";
import Answer from "./components/Answer";
import Numbers from "./components/Numbers";

Numbers.list = _.range(1, 10);

class App extends React.Component { 
	state = {
		selectedNumbers: [],
		randomNumOfStars: 1 + Math.floor(Math.random()*9),
		answerCorrect: null,
	};
	selectNumber = (clickedNumber) => {
		if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0 ){return;}
		this.setState(prevState => ({
			selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
		}));
	};
	unselectNumber = (clickedNumber) => {
		this.setState (prevState => ({
			selectedNumbers: prevState.selectedNumbers.filter(number=> number !== clickedNumber)
		}));
	} 	
	checkAnswer = () => {		
		this.setState(prevState => ({
			answerIsCorrect: prevState.randomNumOfStars ===
				prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
		}));
	};
    render() {
			const { 
				selectedNumbers, 
				randomNumOfStars,
				answerIsCorrect
			} = this.state; 
				return (
					<div className="container">
							<Header />
							<hr />
							<div className="row">
									<Stars numberOfStars={randomNumOfStars}/>
									<Button selectedNumbers={selectedNumbers}
											checkAnswer={this.checkAnswer}
											answerIsCorrect={answerIsCorrect}/>
									<Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
							</div>			
							<br />
							<Numbers selectedNumbers={selectedNumbers}
								selectNumber={this.selectNumber}/>
					</div>
				);
    }
  }

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
