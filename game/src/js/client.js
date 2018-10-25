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
		randomNumOfStars: 1 + Math.floor(Math.random()*9)
	};
	selectNumber = (clickedNumber) => {
		if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0 ){return;}
		this.setState(prevState => ({
			selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
		}));
	};
	
    render() {
      return (
        <div className="container">
            <Header />
            <hr />
            <div className="row">
                <Stars numberOfStars={this.state.randomNumOfStars}/>
                <Button />
                <Answer selectedNumbers={this.state.selectedNumbers}/>
            </div>			
            <br />
            <Numbers selectedNumbers={this.state.selectedNumbers}
					selectNumber={this.selectNumber}/>
        </div>
      );
    }
  }

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
