import React, { Component } from "react";
import GetSchedule from "./get_schedule";
import SearchBar from "./search_bar";
import StopSelector from "./stop_selector";
import AllLines from "./all_lines";
import PredictedSchedule from "./predicted_schedule";
import LineSelector from "./line_selector";

// let selectLine = line => {
// 	this.setState.line = line;
// };

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			line: "Red",
			stop: "",
			stop_id: ""
		};
		this.handleStopSelector = this.handleStopSelector.bind(this);
		this.handleLineSelector = this.handleLineSelector.bind(this);
	}

	handleLineSelector = line => {
		console.log("State: " + this.state.line)
		console.log("Line: " + line);
		this.setState({ line: line });

	};

	handleStopSelector = stop => {
		console.log("Stop: " + stop.value + stop);
		this.setState({ stop: stop.value, stop_id: stop.id });
	};

	render() {
		return (
			<React.Fragment>
				{this.state.line}
				<LineSelector
					line={this.state.line}
					handleLineSelector={this.handleLineSelector}
				/>
				<StopSelector
					line={this.state.line}
					handleStopSelector={this.handleStopSelector}
				/>
				{/* I need to return the selected stop ID here*/}
				{/* make a parser for this url to make a name:id array periodically */}
				{/* https://api-v3.mbta.com/stops */}
				<PredictedSchedule stop_id={this.state.stop_id}/>
				{/* I need to pass the stop id in here*/}
			</React.Fragment>
		);
	}
}
// <SearchBar />

// <AllLines />
