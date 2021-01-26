import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//showing vs-code github setup
export default class App extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-4">
							<TodoInput />
							<TodoList />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
