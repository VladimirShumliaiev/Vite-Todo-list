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
};

const initialState: TodoState = {
  todoList: [],
};

export const fetchTodo = createAsyncThunk<
  Todo,
  undefined,
  { rejectValue: string }
>("todo/fetchTodo", async (_, { rejectWithValue }) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com");

  if (!response) {
    return rejectWithValue("error fetch todo!!!");
  }

  return await response.data;
});

export const addTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
  "todo/addTodo",
  async (title, { rejectWithValue }) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com", {
      id: Date.now(),
      title: title,
      completed: false,
    });

    if (!response) {
      return rejectWithValue("error add todo");
    }

    return (await response.data) as Todo;
  }
);

export const toggleTodo = createAsyncThunk<
  Todo,
  string,
  { rejectValue: string; state: { todos: TodoState } }
>("todo/toggleTodo", async (id, { rejectWithValue, getState }) => {
  const response = await axios.patch(
    `https://jsonplaceholder.typicode.com/${id}`
  );

  const toggle = getState().todos.todoList.find((e) => e.id === id);

  if (toggle) {
    if (!response) {
      return rejectWithValue("error toggle todo");
    }
    return await response.data as Todo
  }
  return rejectWithValue('ERROR')
});

export const 

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
