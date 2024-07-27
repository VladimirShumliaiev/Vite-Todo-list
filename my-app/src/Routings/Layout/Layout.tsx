import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutItem from "./LayoutItem";
import HomePage from "../../components/HomePage/HomePage";
import Todo from "../../components/Todo/Todo";
import Trial from '../../components/Trial/Trial'
import Users from "../../components/Users/Users";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutItem />}>
          <Route index element={<HomePage />} />
          <Route path="todo" element={<Todo />} />
          <Route path="trial" element={<Trial />} />
          <Route path="test" element={<div>test</div>} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Layout;
