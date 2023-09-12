/** @format */

import React, { useState } from "react";

import Header from "./Components/Header";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Tabs from "./Components/Tabs";
import AddTodo from "./Components/AddTodo";
import { TodoModel } from "./Types/TodoModel";
import TodoList from "./Components/TodoList";
function App() {
  const [TodoData, setTodoData] = useState<TodoModel[]>([]);
  return (
    <>
      <Header />
      <Tabs />
      <hr className="w-75 m-auto" />
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <AddTodo TodoData={TodoData} setTodoData={setTodoData} />
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <TodoList TodoData={TodoData} setTodoData={setTodoData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
