import React, { Component } from "react";

export default class TodoInput extends Component {
	render() {
		const { item, handleChange, handleSubmit, editItem } = this.props;
		return (
			<div className="card card-body my-3">
				<form onSubmit={this.handleSubmit}>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i class="fas fa-book"></i>
							</div>
						</div>
						<input
							type="text"
							className="text form-control text-capitalize"
							placeholder="to do list"
							value={item}
							handleChange={this.handleChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}
