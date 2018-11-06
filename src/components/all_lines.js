import React, { Component } from "react";
import Axios from "axios";

export default class AllLines extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stopNum: "70065",
			routes: ""
		};
	}

	componentDidMount() {
		fetch("https://api-v3.mbta.com/routes?")
			.then(data => {
				return data.json();
			})
			.then(data => {
				let routes = data.data.map((route, index) => {
					return (
						<div key={route.attributes.long_name + index}>
							{route.attributes.long_name}
						</div>
					);
				});
				this.setState({ routes: routes });
				console.log("state", this.state.routes);
			});
	}

	// async makeListOfRoutes() {
	// 	const getAllRoutes = () => {
	// 		try {
	// 			return Axios.get("https://api-v3.mbta.com/routes?");
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};
	// 	let routeList = [];
	// 	apiResult = await getAllRoutes(5);
	// 	for (route in apiResult) {
	// 		routeList.push([route.attributes.long_name, route.attributes.id]);
	// 	}
	// 	console.log(routeList);
	// }

	render() {
		{
			/*const makeApiCall = (stopNum = 70065) => {
			try {
				return Axios.get(
					`https://api-v3.mbta.com/schedules?filter[stop]=${stopNum}`
				);
			} catch (error) {
				console.error(error);
			}
		};
		console.log(this.makeListOfRoutes());*/
		}
		return (
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="enter your stop number."
					value={this.state.stopNum}
					onChange={event => this.onInputChange(event.target.value)}
				/>
				{this.state.routes}
				{/*console.log(makeApiCall())*/}
			</div>
		);
	}
	onInputChange(stopNum) {
		this.setState({ stopNum });
	}
}
