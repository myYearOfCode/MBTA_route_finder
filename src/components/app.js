import React, { Component } from "react";
import GetSchedule from "./get_schedule";
import SearchBar from "./search_bar";
import StopSelector from "./stop_selector";
import AllLines from "./all_lines";
import PredictedSchedule from "./predicted_schedule";
import LineSelector from "./line_selector";

let selectLine = line => {
	this.setState.line = line;
};

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			line: "Red",
			stop: ""
		};
		this.handleStopSelector = this.handleStopSelector.bind(this);
	}

	handleLineSelector = line => {
		console.log("Line: " + line);
		this.setState({ line });
	};
	handleStopSelector = stop => {
		console.log("Stop: " + stop);
		this.setState({ stop });
	};

	render() {
		return (
			<div>
				{this.state.line}
				<LineSelector onLineSelectionChange={this.handleLineSelector} />
				<StopSelector
					line={this.state.line}
					onStopSelectionChange={this.handleStopSelector}
				/>
				{this.state.stop}
				{/* I need to return the selected stop ID here*/}
				<PredictedSchedule />
				{/* I need to pass the stop id in here*/}
				{/*<GetSchedule line="Red" stop={this.state.stop} />*/}
			</div>
		);
	}
}
// <SearchBar />

// <AllLines />
