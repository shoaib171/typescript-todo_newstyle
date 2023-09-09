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
      <Container className="mt-5">
        <Row className="w-75 m-auto">
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="w-75 m-auto">
          <Col>
            <Tabs />
            <hr className="" />
          </Col>
        </Row>
        <Row className="mt-4 w-75 m-auto">
          <Col>
            <AddTodo TodoData={TodoData} setTodoData={setTodoData} />
          </Col>
        </Row>
        <Row className=" w-75 m-auto">
          <Col>
            <TodoList TodoData={TodoData} setTodoData={setTodoData} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
