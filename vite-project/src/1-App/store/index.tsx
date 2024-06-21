import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../../6-Entities/Todo/model/index'
import todosSlice from '../../6-Entities/Todo/model/index'

export const store = configureStore({
    reducer:{
        user: userSlice,
        todos: todosSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


