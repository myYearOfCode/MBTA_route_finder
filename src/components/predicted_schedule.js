import React, { Component } from "react";
import Axios from "axios";

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

export default class PredictedSchedule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lines: "",
			vehicles: ""
		};
	}

	// makeUrl(end) {
	// 	return `https://api-v3.mbta.com${end}`;
	// }
	//
	// componentDidMount() {
	// 	let fontColor = "";
	// 	let bkgColor = "";
	// 	fetch("https://api-v3.mbta.com/routes?")
	// 		.then(response => {
	// 			return response.json();
	// 		})
	// 		.then(response => {
	// 			let lines = response.data.map((line, index) => {
	// 				console.log(line.attributes.long_name);
	// 				return (
	// 					<option
	// 						value={this.makeUrl(line.links.self)}
	// 						key={line.attributes.sort_order}
	// 					>
	// 						{line.attributes.long_name}
	// 					</option>
	// 				);
	// 			});
	// 			this.setState({ lines: lines });
	// 			console.log("state", this.state.lines);
	// 		});
	// }

	render() {
		return (
			// <form action="/action_page.php">
			// 	<select name="lines">{this.state.lines}</select>
			// 	<br />
			// 	<br />
			// 	<input type="submit" class="btn btn-primary"/>
			// </form>
			<div className="">{this.props.stop_id}</div>
		);
	}
	// onInputChange(stopNum) {
	// 	this.setState({ stopNum });
	// }
}
