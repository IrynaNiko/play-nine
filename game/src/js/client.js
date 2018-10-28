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
			usedNumbers: [],
			answerCorrect: null,
			redraws: 5
		};
		selectNumber = (clickedNumber) => {
			if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0 ){return;}
			this.setState(prevState => ({
				answerIsCorrect: null,
				selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
			}));
		};
		unselectNumber = (clickedNumber) => {
			this.setState (prevState => ({
				answerIsCorrect: null,
				selectedNumbers: prevState.selectedNumbers.filter(number=> number !== clickedNumber)
			}));
		} 	
		checkAnswer = () => {		
			this.setState(prevState => ({
				answerIsCorrect: prevState.randomNumOfStars ===
					prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
			}));
		};
		acceptAnswer = () => {
			this.setState(prevState => ({
				usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
				selectedNumbers: [],
				answerCorrect: null,
				randomNumOfStars: 1 + Math.floor(Math.random()*9)
			}));
		};
		redraw = () => {
			this.setState(prevState => ({
				randomNumOfStars: 1 + Math.floor(Math.random()*9),
				answerCorrect: null,
				selectedNumbers: [],
				redraws: prevState.redraws - 1
			}));
		}
    render() {
			const { 
				selectedNumbers, 
				randomNumOfStars,
				usedNumbers,
				answerIsCorrect,
				redraws
			} = this.state; 
			return (
				<div className="container">
						<Header />
						<hr />
						<div className="row">
								<Stars numberOfStars={randomNumOfStars}/>
								<Button selectedNumbers={selectedNumbers}
										checkAnswer={this.checkAnswer}
										acceptAnswer={this.acceptAnswer}
										answerIsCorrect={answerIsCorrect}
										redraw={this.redraw}
										redraws={redraws}/>
								<Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
						</div>			
						<br />
						<Numbers selectedNumbers={selectedNumbers}
							selectNumber={this.selectNumber}
							usedNumbers={usedNumbers}/>
				</div>
			);
    }
  }

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
