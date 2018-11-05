import React, { Component } from "react";

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="enter your closest stop."
				/>
				{/*<div className="input-group-append">*/}
				<input className="input-group-text">button!</input>
				{/*</div>*/}
			</div>
		);
	}
}
