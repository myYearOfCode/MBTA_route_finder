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

	render() {
		return (
			<div className="">{this.props.stop_id}</div>
		);
	}

}
