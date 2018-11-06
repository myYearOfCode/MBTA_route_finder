import React, { Component } from "react";
import GetSchedule from "./get_schedule";
import SearchBar from "./search_bar";
import AllLines from "./all_lines";

export default class App extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<GetSchedule />
				<AllLines />
			</div>
		);
	}
}
