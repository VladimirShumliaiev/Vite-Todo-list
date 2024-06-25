import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
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
    pending: false
}

export const fetchTodo = createAsyncThunk<Todo[], undefined, {rejectValue: string}>(
    'Todo/fetchTodo',
    async (_,{rejectWithValue}) => {
        const response = await axios('https://jsonplaceholder.typicode.com/todos/?_limit=10')

        if (!response) {
            return rejectWithValue('error fetch todo')
        }
        return await response.data
    }
)

export const addTodo = createAsyncThunk<Todo,string, {rejectValue: string}>(
    'Todo/addTodo',
    async (title, {rejectWithValue}) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
            id: Date.now,
            title: title,
            completed: false
        })

        if (!response) {
            return rejectWithValue('error add')
        }
        return await response.data
    }

)

export const toggleTodo = createAsyncThunk<Todo, string, {rejectValue: string, state: {todo: TodoState}}>(
    'Todo/toggleTodo',
    async (id, {rejectWithValue, getState}) => {
            const toggle = getState().todo.list.find(e => e.id === id)

            if (toggle) {
                const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`)

                if (!response) {
                   return rejectWithValue('error toggle')
                }

                return await response.data
            }
    }
)

export const deleteTodo = createAsyncThunk<string, string, {rejectValue: string}>(
    'Todo/deleteTodo',
    async (id, {rejectWithValue}) => {

        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        if (!response) {
            return rejectWithValue('error delete')
        }
        return id
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
            state.error = null 
        })
        .addCase(fetchTodo.fulfilled, (state, action) => {
            state.list = action.payload
            state.pending = false
        })
        .addCase(addTodo.pending, (state) => {
            state.pending = true
            state.error = null
        })
        .addCase(addTodo.fulfilled, (state, action) => {
            state.list.push(action.payload)
            state.pending = false
        })
        .addCase(toggleTodo.fulfilled, (state, action) => {
            const toggle = state.list.find(e => e.id === action.payload.id)

            if (toggle) {
                toggle.completed = !toggle.completed
            }
        })
        .addCase(deleteTodo.fulfilled, (state, action) => {
            state.list = state.list.filter(e => e.id !== action.payload)
        })
})


export default todoSlice.reducer