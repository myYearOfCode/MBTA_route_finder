import React, { Component } from "react";

//TODO
// +++import colors and display them in the div bkgs
//set up the divs to be clickable
//capture the urls for the vehicle schedules
// import all lines, filter by bus / train
// 1 = subway, 3 = bus "filter%5Broute_type%5D=1"
// https://api-v3.mbta.com/routes?filter%5Broute_type%5D=1
//then show the line stops and directions
// https://api-v3.mbta.com/stops?filter%5Broute%5D=Red
//then show the predictions for that stop
//ideally they are all stateless and in the main app
//reacting to the previous input
//have fun
//learn shit

export default class LineSelector extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<select name="Lines">
				<option value="Blue">Blue</option>
				<option value="Green">Green</option>
				<option value="Orange">Orange</option>
				<option value="Red">Red</option>
			</select>
		);
	}
	//How can I handle a change on the input form??
	onInputChange(stopNum) {
		console.log(stopNum);
	}
}
