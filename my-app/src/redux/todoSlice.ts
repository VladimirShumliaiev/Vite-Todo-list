import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Todo from "../components/Todo/Todo";
import axios from "axios";

type Todo = {
  id: string;
  userId: string;
  completed: boolean;
  title: string;
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
  const response = await axios("https://jsonplaceholder.typicode.com/todos");

  if (!response) {
    return rejectWithValue("error fetchTodo");
  }
  return await response.data;
});

export const addTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
  "todo/addTodo",
  async (title, { rejectWithValue }) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
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

export const completeTodo = createAsyncThunk<
  Todo,
  string,
  { rejectValue: string; state: { completeTodo: TodoState } }
>("todo/completeTodo", async function (id, { rejectWithValue, getState }) {
  const response = await axios.patch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  const completed = getState().completeTodo.todoList.find((e) => e.id === id);

  if (completed) {
    if (!response) {
      return rejectWithValue("error completed todo");
    }
    return (await response.data) as Todo;
  }
  return rejectWithValue("ERROR");
});

export const deleteTodo = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("todo/deleteTodo", async (id, { rejectWithValue }) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  if (!response) {
    return rejectWithValue("error delete todo");
  }

  return id;
});

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
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
      .addCase(completeTodo.fulfilled, (state, action) => {
        const toggle = state.todoList.find((e) => e.id === action.payload.id);
        if (toggle) {
          toggle.completed = !toggle.completed;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todoList = state.todoList.filter((e) => e.id !== action.payload);
      }),
});

export default todoSlice.reducer;
