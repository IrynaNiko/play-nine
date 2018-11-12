import React from "react";
import ReactDOM from "react-dom";

export default class Instructions extends React.Component { 
  render() {
    return (
      <div>
				<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#collapseInstructions">Instructions</button>
				<div id="collapseInstructions" class="collapse">
					<ul className="list-group">
						<li className="list-group-item">1) Select one or more numbers from the list so that the sum of them matches the number of stars to the left.</li>
						<li className="list-group-item">2) If there are no possible combinations to match the number of stars you can redraw 5 times maximum.</li>
						<li className="list-group-item">3) The game is over once you have either used all the available numbers or used all your redraws having no more possible solutions.</li>
					</ul>
					<br />
					<h5>Have fun!</h5>
				</div>
				<br />
      </div>
    );
  }
}

