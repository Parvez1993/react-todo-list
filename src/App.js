import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//showing vs-code github setup

export default class App extends Component {
	state = {
		items: [
			{ id: 1, title: "Wake Up" },
			{ id: 2, title: "Go to Work" },
			{ id: 3, title: "Return Home" },
			{ id: 4, title: "Sleep" },
		],
		id: uuid(),
		item: "",
		editItem: false,
	};

	handleChange = (e) => {
		console.log("handle change");
	};
	handleSubmit = (e) => {
		console.log("handle submit");
	};
	clearList = () => {
		console.log("clear list");
	};
	handleDelete = (id) => {
		console.log(`handle delete ${id}`);
	};
	handleEdit = (id) => {
		console.log(`handle edit ${id}`);
	};
	render() {
		return (
			<div>
				<div className="container">
					<div class="row">
						<div class="col-10 mx-auto  col-md-8 mt-5">
							<h3 className="uppercase">Todo List</h3>
							<TodoInput
								item={this.state.item}
								handleChange={this.state.handleChange}
								handleSubmit={this.handleSubmit}
								editItem={this.state.editItem}
							/>
							<TodoList
								items={this.state.items}
								clearList={this.clearList}
								handleDelete={this.handleDelete}
								handleEdit={this.handleEdit}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
