import React, { Component } from "react";
import Axios from "axios";

//TODO
// +++import colors and display them in the div bkgs
//set up the divs to be clickable
//capture the urls for the vehicle schedules
//have fun
//learn shit

export default class PredictedSchedule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stopNum: "70065",
			vehicles: ""
		};
	}

	makeUrl(end) {
		return `https://api-v3.mbta.com${end}`;
	}

	componentDidMount() {
		let fontColor = "";
		let bkgColor = "";
		fetch("https://api-v3.mbta.com/predictions?filter[stop]=70065")
			.then(response => {
				return response.json();
			})
			.then(response => {
				let vehicles = response.data.map((vehicle, index) => {
					return (
						<a href={this.makeUrl(vehicle.links.self)}>
							<div className="row" key={vehicle.trip.data.id}>
								<div
									className="leftColumn"
									key={vehicle.attributes.arrival_time}
								>
									{vehicle.attributes.arrival_time}
								</div>
								<div className="rightColumn" key={vehicle.id}>
									{console.log(vehicle.attributes.color)}
									<p>{vehicle.attributes.status}</p>
								</div>
							</div>
						</a>
					);
				});
				this.setState({ vehicles: vehicles });
				console.log("state", this.state.vehicles);
			});
	}

	render() {
		return (
			<div className="input-group mb-3">
				{this.state.vehicles}
				{/*console.log(makeApiCall())*/}
			</div>
		);
	}
	onInputChange(stopNum) {
		this.setState({ stopNum });
	}
}
