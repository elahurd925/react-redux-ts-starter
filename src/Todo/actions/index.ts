import { Action } from "src/actions/types";

export const ADD_ITEM = 'ADD_ITEM';

export interface AddItem extends Action { type: typeof ADD_ITEM, payload: string }

export const addItem = (item: string): AddItem => {
	return { type: ADD_ITEM, payload: item };
}

export type Actions = AddItem;