import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Todo from "../components/Todo/Todo";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoState = {
  todoList: Todo[];
  loading: boolean;
  error: string | null;
};

const initialState: TodoState = {
  todoList: [],
  loading: false,
  error: null,
};

export const fetchTodo = createAsyncThunk<
  Todo[],
  undefined,
  { rejectValue: string }
>("todo/fetchTodo", async (_, { rejectWithValue }) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (!response) {
    return rejectWithValue("error fetch todo!!!");
  }

  return await response.data;
});

export const addTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
  "todo/addTodo",
  async (title, { rejectWithValue }) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos/",
      {
        id: Date.now(),
        title: title,
        completed: false,
      }
    );

    if (!response) {
      return rejectWithValue("error add todo");
    }

    return (await response.data) as Todo;
  }
);

export const toggleTodo = createAsyncThunk<
  Todo,
  string,
  { rejectValue: string; state: { todo: TodoState } }
>("todo/toggleTodo", async (id, { rejectWithValue, getState }) => {
  const response = await axios.patch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  const toggle = getState().todo.todoList.find((e) => e.id === id);

  if (toggle) {
    if (!response) {
      return rejectWithValue("error toggle todo");
    }
    return (await response.data) as Todo;
  }
  return rejectWithValue("ERROR");
});

export const removeTodo = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("todo/removeTodo", async (id, { rejectWithValue }) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  if (!response) {
    return rejectWithValue("error remove todo");
  }
  return id;
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.todoList = action.payload;
        state.loading = false;
      })
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todoList.push(action.payload);
        state.loading = false;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const toggle = state.todoList.find((e) => e.id === action.payload.id);
        if (toggle) {
          toggle.completed = !toggle.completed;
        }
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.todoList = state.todoList.filter((e) => e.id !== action.payload);
      }),
});

export default todoSlice.reducer;
