import { Action } from "redux"

export enum TodoActionTypes {
    ADD_TODO= "ADD_TODO",
    REMOVE_TODO="REMOVE_TODO"
}

export interface IAddTodoAction extends Action {
    type: TodoActionTypes.ADD_TODO
    text: string
}

export interface IRemoveTodoAction extends Action {
    type: TodoActionTypes.REMOVE_TODO
    id: number
}


export type ITodoActions = IAddTodoAction | IRemoveTodoAction 