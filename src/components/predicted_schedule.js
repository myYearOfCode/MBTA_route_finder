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

	componentWillReceiveProps(nextProps) {
		// example call
		// https://api-v3.mbta.com/predictions?filter[stop]=place-portr
		// I need to get time in a usable format and then sort by current time.
		// then display the 3 closest trains in each direction.
		fetch(`https://api-v3.mbta.com/predictions?filter[stop]=${nextProps.stop_id}`)
			.then(response => {
				return response.json();
			})
			.then(response => {
				let stops = response.data.map(trip => {
					return (
						<option
							value={trip.attributes.name}
							key={trip.attributes.latitude}
							lat={trip.attributes.latitude}
							id={trip.id}
						>
							{stop.attributes.name}
							{/* {console.log(`"${stop.attributes.name}":"${stop.id}"`)} */}
						</option>
					);
				});
				this.setState({ stops: stops});
				// , stop_id: stop.id
				// console.log("state", this.response);
			});
	}

	render() {
		return (
			// https://api-v3.mbta.com/predictions?filter[stop]=STOP_ID
			<div className="">{this.props.stop_id}</div>
		);
	}
}
