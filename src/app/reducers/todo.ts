import { Reducer } from "redux"
import {ITodoActions, TodoActionTypes} from "../action-types"
import { ITodoState, ITodo } from "../interfaces"

const initialState: ITodoState = {
    todos: []
}


let i = 0

const incrementI = ()  => {
    return i++;
}
const todoReducer: Reducer<ITodoState> = (state: ITodoState = initialState, action: ITodoActions) => {

    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return {
                ...state,
                todos : [
                    {
                        id: incrementI(),
                        text: action.text,
                        completed: false
                    },
                    ...state.todos]
            }
            
            break;
        case TodoActionTypes.REMOVE_TODO:
            const newTodo = state.todos.filter((todo: ITodo) => {
                return todo.id !== action.id
            })
            return {
                ...state,
                todos: newTodo
            }
        default:
            return state
            break;
    }
}

export default todoReducer