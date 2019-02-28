import { Action, ActionCreator } from 'redux'
import { ITodoActions, TodoActionTypes } from "./action-types"


export const addTodoActionCreator : ActionCreator<ITodoActions> = (text) => {
    return {
        type: TodoActionTypes.ADD_TODO,
        text: text
    }
}

export const removeTodoActionCreator: ActionCreator<ITodoActions> = (id) => {
    return {
        type: TodoActionTypes.REMOVE_TODO,
        id: id
    }
}