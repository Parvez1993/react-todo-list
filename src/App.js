import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//showing vs-code github setup

export default class App extends Component {
	state = {
		items: [],
		id: uuid(),
		item: "",
		editItem: false,
	};

	handleChange = (e) => {
		this.setState({
			item: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const newItem = {
			id: this.state.id,
			title: this.state.item,
		};
		const updatedItem = [...this.state.items, newItem];
		this.setState({
			items: updatedItem,
			id: uuid(),
			item: "",
			editItem: false,
		});
	};
	clearList = () => {
		this.setState({
			items: [],
		});
	};
	handleDelete = (id) => {
		const filteredItems = this.state.items.filter((item) => item.id !== id);
		this.setState({
			items: filteredItems,
		});
	};
	handleEdit = (id) => {
		const filteredItems = this.state.items.filter((item) => item.id !== id);
		const selecteditems = this.state.items.find((item) => item.id === id);
		console.log("filtered items", filteredItems);
		console.log("selected items", selecteditems);
		this.setState({
			items: filteredItems,
			item: selecteditems.title,
			id: id,
			editItem: true,
		});
	};
	render() {
		console.log(this.state);
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto  col-md-8 mt-5">
							<h3 className="uppercase text-center">Todo Inputs</h3>
							<TodoInput
								item={this.state.item}
								handleChange={this.handleChange}
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
