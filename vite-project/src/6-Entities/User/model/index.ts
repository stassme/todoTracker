import { createSlice } from "@reduxjs/toolkit";
import { User } from "../const";



interface initialState {
    user: User
}

const initialState: initialState = {
    user: {
        id: 0,
        name: ''
    }
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addUser(state, action) {
            state.user = action.payload
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer