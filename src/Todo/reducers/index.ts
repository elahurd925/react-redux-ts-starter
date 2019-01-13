import { v1 as uuidv1 } from 'uuid';

import TodoState from "../models/TodoState";
import { Actions, ADD_ITEM } from "../actions";
import TodoItem from "../models/TodoItem";

export const defaultTodosState: TodoState = {
	items: [
		{
			id: uuidv1(),
			text: "Wake up"
		}
	]
};

const todos = (state: TodoState = defaultTodosState, action: Actions): TodoState => {
	switch (action.type) {
		case ADD_ITEM:
			const newItem: TodoItem = {
				id: uuidv1(),
				text: action.payload
			};
			return { ...state, items: [...state.items, newItem ] };
		default:
			return state;
	}
};

export default todos;
