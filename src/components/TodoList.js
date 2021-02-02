import React, { Component } from "react";
import Item from "./TodoItem";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
	render() {
		const { items, handleDelete, clearList, handleEdit } = this.props;
		return (
			<ul className="list-group my-5">
				<h3 className="text-center text-capitalize">Todo List</h3>
				{items.map((item) => {
					return (
						<TodoItem
							key={item.id}
							title={item.title}
							handleDelete={() => handleDelete(item.id)}
							handleEdit={() => handleEdit(item.id)}
						/>
					);
				})}
				<button
					type="button"
					className="btn btn-block btn-danger my-4"
					onClick={clearList}
				>
					Clear List
				</button>
			</ul>
		);
	}
}
