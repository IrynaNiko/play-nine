import React from "react";
import ReactDOM from "react-dom";
import _ from 'lodash';

import Game from "./components/Game";
import Stars from "./components/Stars";
import Button from "./components/Button";
import Answer from "./components/Answer";
import Numbers from "./components/Numbers";

Numbers.list = _.range(1, 10);

class App extends React.Component { 
    render() {
      return (
        <div className="container">
            <Game />
            <hr />
            <div className="row">
                <Stars />
                <Button />
                <Answer />
            </div>			
            <br />
            <Numbers />
        </div>
      );
    }
  }

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
