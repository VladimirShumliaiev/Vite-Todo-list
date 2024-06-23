import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export type Todo = {
    id: string 
    title: string
    completed: boolean
}

type TodoState = {
    list: Todo[]
    error: null | string
    pending: boolean

}

const initialState: TodoState = {
    list: [],
    error: null,
    pending: false,
} satisfies TodoState as TodoState

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
   name: 'TodoSlice',
   initialState,
   reducer:{},
   extraReducers: builder => 
    builder
        .addCase(fetchTodo.pending, state => {
            state.pending = true
            state.error = false
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .addCase(fetchTodo.fulfilled, (state, action) => {
            
        })
})


export default todoSlice.reducer