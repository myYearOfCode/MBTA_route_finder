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
			stop_id: props.stop_id,
			trips: "trips"
		};
	}
//
	componentWillReceiveProps(nextProps) {
		// example call
		// https://api-v3.mbta.com/predictions?filter[stop]=place-portr
		// I need to get time in a usable format and then sort by current time.
		// then display the 3 closest trains in each direction.
		// console.log(typeof nextProps)
		// console.log(nextProps)

		if (typeof nextProps !== "undefined" && this.state.stop_id !== nextProps.stop_id){
			// maybe I should make this a better test to see if it actually needs a rerender.
			// console.log("stop id = " + this.state.stop_id)
			// console.log("next stop id = " + nextProps.stop_id)
			this.setState({stop_id: nextProps.stop_id});
			fetch(`https://api-v3.mbta.com/predictions?filter[stop]=${nextProps.stop_id}`)
				.then(response => {
					return response.json();
				})
				.then(response => {
					let trips = response.data.map(trip => {
						return (
							<div
								value={trip.id}
								time={trip.attributes.arrival_time}
								direction={trip.attributes.direction_id}
								id={trip.id}
								key={trip.id}
							>
								{trip.id}

							</div>
							// {/* <option
							// 	value={trip.id}
							// 	time={trip.attributes.arrival_time}
							// 	direction={trip.attributes.direction_id}
							// 	id={trip.id}
							// >
							// </option> */}
						);

					});
					this.setState({ trips: trips});
					// console.log(trips)
					nextProps.handlePredictedSchedule(trips)
					// , stop_id: stop.id
					// console.log("state", this.response);
			});
		}
	}

	render() {
		// do some magic here to sort through the incoming trips to find the next
		// three in each direction
		// walk through the data one item at a time
		let dir_one_array = []
		let dir_zero_array = []
		let trips = this.state.trips
		console.log(typeof trips)
		let arriving_trains = trips.map( trip => {

			if (dir_one_array.length < maxLength && trip.data.props.direction == 1) {
				return(dir_one_array)
			}
			if (dir_zero_array.length < maxLength && trip.data.props.direction == 0) {
				return(dir_zero_array)
			}
		})
		return (
			<div className="trips"> {dir_one_array}, {this.state.trips.slice(0,3)}</div>

		);
	}
}
