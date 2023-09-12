/** @format */
import { Alert, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useEffect } from "react";
import { TodoModel } from "../Types/TodoModel";

interface IAppProps {
  TodoData: TodoModel[];
  setTodoData: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const AddTodo: React.FunctionComponent<IAppProps> = ({
  TodoData,
  setTodoData,
}) => {
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const [error, setError] = React.useState<string>("");

  useEffect(() => {
    const StoreData = localStorage.getItem("TodoData");
    if (StoreData) {
      setTodoData(JSON.parse(StoreData));
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(titleRef, "slug");
    if (titleRef.current?.value === "") {
      return setError("Field are Mandatory");
    }
    setError("");
    // Create a new note object
    const newTodo = {
      id: new Date().toString(),
      title: (titleRef.current as HTMLInputElement).value,
      completed: false,
      createdAt: new Date().toString(),
    };
    console.log("new todo", newTodo);
    // Add the new todo to the existing notes data
    const updatedNTodoData = [...TodoData, newTodo];

    // Update the state with the new todo data
    setTodoData(updatedNTodoData);
    // Clear the input fields
    (titleRef.current as HTMLInputElement).value = "";
    console.log(updatedNTodoData, "slug");
    localStorage.setItem("TodoData", JSON.stringify(updatedNTodoData));
  };

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Write your Todo here...."
            ref={titleRef}
          />
          <Button
            variant="outline-primary"
            type="submit"
            size="sm"
            className="rounded-1 ms-2"
          >
            Add_todo
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddTodo;
