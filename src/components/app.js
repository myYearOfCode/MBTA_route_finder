import React, { Component } from "react";
import GetSchedule from "./get_schedule";
import SearchBar from "./search_bar";
import AllLines from "./all_lines";
import PredictedSchedule from "./predicted_schedule";
import LineSelector from "./line_selector";

let selectLine = line => {
	this.setState.line = line;
};

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<LineSelector />
				<PredictedSchedule />
				<SearchBar />
				<GetSchedule />
				<AllLines />
			</div>
		);
	}
}
