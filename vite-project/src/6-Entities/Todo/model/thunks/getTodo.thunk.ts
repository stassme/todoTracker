import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "../../const";
import { getTodo, getTodos } from "../../api";


export const fetchTodos = createAsyncThunk<Todo[], void, { state: RootState }>(
    'todos/fetchTodos',
    async (_, { dispatch }) =>{
        return await getTodos()
    }
)

export const fetchTodo = createAsyncThunk<Todo, number, { state: RootState }>(
    'todos/fetchTodo',
    async (id, { dispatch }) =>{
        return await getTodo(id)
    }
)