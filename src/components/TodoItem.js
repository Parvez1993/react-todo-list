import React, { Component } from "react";

export default class TodoItem extends Component {
	render() {
		const { title, handleEdit, handleDelete } = this.props;
		return (
			<li className="list-group-item d-flex justify-content-between text-uppercase">
				<h6>{title}</h6>
				<div className="todo-icon">
					<span className="text-success mx-2" onClick={handleEdit}>
						<i className="lni lni-pencil"></i>
					</span>
					<span className="text-danger mx-2" onClick={handleDelete}>
						<i className="lni lni-trash"></i>
					</span>
				</div>
			</li>
		);
	}
}
