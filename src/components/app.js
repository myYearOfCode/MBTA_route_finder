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
	}

	render() {
		let handleLineSelector = line => {
			console.log("Line: " + line);
			this.setState({ line });
		};
		let handleStopSelector = stop => {
			console.log("Stop: " + stop);
			this.setState({ stop });
		};

		return (
			<div>
				{this.state.line}
				<LineSelector onLineSelectionChange={handleLineSelector} />

				<StopSelector
					line={this.state.line}
					onStopSelectionChange={handleStopSelector}
				/>

				<PredictedSchedule />
				<GetSchedule line="Red" stop={stop} />
			</div>
		);
	}
}
// <SearchBar />

// <AllLines />
