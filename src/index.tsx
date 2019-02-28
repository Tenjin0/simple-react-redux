import store from "./app/store"
import {addTodoActionCreator, removeTodoActionCreator} from "./app/actions"


const addTodo = (text: string) => {
    store.dispatch(addTodoActionCreator(text))
}

const removeTodo = (id: number) => {
    store.dispatch(removeTodoActionCreator(id))
}

interface IMyWindow extends Window {
    addTodo: typeof addTodo
    removeTodo: typeof removeTodo
    store: typeof store
}
declare var window: IMyWindow

window.store = store
window.addTodo = addTodo
window.removeTodo = removeTodo
