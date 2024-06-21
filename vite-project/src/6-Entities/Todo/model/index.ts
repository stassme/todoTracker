import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../const";
import { fetchTodo, fetchTodos } from "./thunks/getTodo.thunk.ts";



interface initialState {
    isError: boolean
    isLoading: boolean
    todos: Todo[]
    selectedTodo: Todo | {}
}

const initialState: initialState = {
    isError: false,
    isLoading: false,
    todos: [],
    selectedTodo: {}
}

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        addTodos(state, action: { payload: Todo[] }) {
            state.todos = action.payload
        },
        setIsDone(state, action: { payload: { id: number, done: boolean } }) {
            state.todos[action.payload.id].isDone = action.payload.done
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false
            state.todos = action.payload
        }).addCase(fetchTodos.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchTodos.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        }).addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.selectedTodo = action.payload
        }).addCase(fetchTodo.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchTodo.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
    }
})

export const { addTodos, setIsDone } = todosSlice.actions
export default todosSlice.reducer