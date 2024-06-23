import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export type Todo = {
    id: string 
    title: string
    completed: boolean
}

type TodoState = {
    list: Todo[]
    // error: null | string
    // pending: boolean

}

const initialState: TodoState = {
    list: [],
    // error: null,
    // pending: false
}

export const fetchTodo = createAsyncThunk<Todo[], undefined, {rejectValue: string}>(
    'Todo/fetchTodo',
    async (_,{rejectWithValue}) => {
        const response = await axios('https://jsonplaceholder.typicode.com/todos')

        if (!response) {
            return rejectWithValue('error fetch todo')
        }
        return await response.data
    }
)

const todoSlice = createSlice({
   name: 'Todo',
   initialState,
   reducer:{},
   extraReducers: builder => 
    builder
        .addCase(fetchTodo.pending, (state) => {
            state.pending = true
            state.error = false
        })
        .addCase(fetchTodo.fulfilled, (state, action) => {
            state.list = action.payload
            state.payload = false
        })
})


export default todoSlice.reducer