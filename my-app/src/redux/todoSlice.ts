import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export type Todo = {
    id: string 
    title: string
    completed: boolean
}

type TodoState = {
    list: Todo[]
    error: string | null
    pending: boolean

}

const initialState: TodoState = {
    list: [],
    error: null,
    pending: false
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
   reducers:{},
   extraReducers: builder => 
    builder
        .addCase(fetchTodo.pending, (state) => {
            state.pending = true
            state.error = null // Change false to null
        })
        .addCase(fetchTodo.fulfilled, (state, action) => {
            state.list = action.payload
            state.pending = false
        })
})


export default todoSlice.reducer