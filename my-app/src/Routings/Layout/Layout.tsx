import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutItem from "./LayoutItem";
import HomePage from "../../components/HomePage/HomePage";
import Todo from "../../components/Todo/Todo";
import Trial from '../../components/Trial/Trial'
import Users from "../../components/Users/Users";
import Comments from "../../components/Comments/Comments";
import Counter from "../../components/Counter/Counter";
import Quiz from "../../components/Quiz/Quiz";
import SquaresApp from "../../components/Squares/SquaresApp";
import Photos from "../../components/Photos/Photos";


const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutItem />}>
          <Route index element={<HomePage />} />
          <Route path="todo" element={<Todo />} />
          <Route path="trial" element={<Trial />} />
          <Route path="test" element={<Comments/>} />
          <Route path="users" element={<Users />} />
          <Route path="counter" element={<Counter />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="squares" element={<SquaresApp />} />
          <Route path="photo" element={<Photos/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default Layout;
