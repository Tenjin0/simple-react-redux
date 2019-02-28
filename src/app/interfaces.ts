export interface ITodo {
    id: number,
    text: string
    completed: boolean
}

export interface ITodoState {
    todos : ITodo[]
}