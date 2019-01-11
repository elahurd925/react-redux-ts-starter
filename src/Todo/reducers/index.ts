import TodoState from "../models/TodoState";

export const todosDefaultState: TodoState = {
	todos: []
};

// TODO: Create Actions type for action
const todos = (state: TodoState = todosDefaultState, action: any): TodoState => {
	switch (action.type) {
		default:
			return state;
	}
};

export default todos;
