import React, { Component } from "react";
import Axios from "axios";

//TODO
// +++import colors and display them in the div bkgs
//set up the divs to be clickable
//capture the urls for the route schedules
//have fun
//learn shit
// this request filters for red line in the next hour going one way.
// https://api-v3.mbta.com/schedules?filter[route]=Red&filter[min_time]=21:17&filter[max_time]=22:17&filter[direction_id]=0
// ?filter[stop]=STOP_ID will show schedules at any given stop
// https://api-v3.mbta.com/predictions?filter[stop]=STOP_ID will show predictions
//how to get stop numbers?
// https://api-v3.mbta.com/stops?filter[route]=Red

export default class AllStops extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stops: ""
		};
	}

	componentDidMount() {
		fetch(`https://api-v3.mbta.com/stops?filter[route]=${this.props.line}`)
			.then(response => {
				return response.json();
			})
			.then(response => {
				let stops = response.data.map(stop => {
					return (
						<option
							value={stop.attributes.name}
							key={stop.attributes.latitude}
						>
							{stop.attributes.name}
						</option>
					);
				});
				this.setState({ stops: stops });
				console.log("state", this.state.stops);
			});
	}

	render() {
		return (
			<select
				name="Stops"
				onChange={event =>
					this.props.onLineSelectionChange(event.target.value)
				}
			>
				{this.state.stops}
			</select>
		);
	}
}

// <option
// 	value={`Select an ${this.props.line} stop.`}
// 	key="header"
// >
// 					{stop.attributes.name}
// </option>
