import React, { Component } from "react";
import { DropdownButton } from 'react-bootstrap';

//TODO
// +++import colors and display them in the div bkgs
// should I combine all green lines into one line?
// set up the divs to be clickable
// capture the urls for the vehicle schedules
// import all lines, filter by bus / train
// 1 = subway, 3 = bus "filter%5Broute_type%5D=1"
// https://api-v3.mbta.com/routes?filter%5Broute_type%5D=1
// then show the line stops and directions
// https://api-v3.mbta.com/stops?filter%5Broute%5D=Red
// then show the predictions for that stop
// ideally they are all stateless and in the main app
// reacting to the previous input
// hiding forms with css
// document.getElementsByClassName("dropdown")[0].classList.add('visible')
// have fun
// learn shit

export default class LineSelector extends Component {
	constructor(props) {
		super(props);
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return(nextProps.line == this.props.line)
	// }

	render() {
		return (
			<React.Fragment>
				<div
					classList="pulldown">
					<select
						name="Lines"
						onChange={event =>
							this.props.handleLineSelector(event.target.value)
						}
						value={this.props.line}


					>
						<option value="Blue">Blue</option>
						<option value="Green-B">Green B</option>
						<option value="Green-C">Green C</option>
						<option value="Green-D">Green D</option>
						<option value="Green-E">Green E</option>
						<option value="Orange">Orange</option>
						<option value="Red" defaultValue>Red</option>
					</select>
				</div>
{/*
				<div className="dropdown">
				  <button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="Lines"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						// onChange={event =>
						// 	this.props.handleLineSelector(event.target.value)
						// }
						// value={this.props.line}
						// onClick={console.log('hello')}
					>
				    Select a line
				  </button>
				  <div className="dropdown-menu" aria-labelledby="line_selector_menu_button">
						<a className="dropdown-item" href="#">Blue</a>
						<a className="dropdown-item" href="#">Green-B</a>
						<a className="dropdown-item" href="#">Green-C</a>
						<a className="dropdown-item" href="#">Green-D</a>
						<a className="dropdown-item" href="#">Green-E</a>
						<a className="dropdown-item" href="#">Orange</a>
						<a className="dropdown-item" href="#">Red</a>
				  </div>
				</div> */}

			</React.Fragment>
		);
	}
}
