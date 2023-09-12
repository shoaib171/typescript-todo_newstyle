/** @format */

import * as React from "react";
import { TodoModel } from "../Types/TodoModel";
import TodoCard from "../Components/TodoListCard";
import { useSearchParams, useNavigate } from "react-router-dom";

interface iListProps {
  TodoData: TodoModel[];
  setTodoData: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const TodoList: React.FC<iListProps> = ({ TodoData, setTodoData }) => {
  const [searchParams] = useSearchParams();
  let Todo = searchParams.get("TodoData");

  let filterData = TodoData;
  const navigate = useNavigate(); // Initialize navigate from react-router-dom

  if (Todo === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }

  if (Todo === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  const RenderNotesList = () => {
    return filterData.map((task) => {
      return (
        <TodoCard
          key={task.id}
          task={task}
          HandleDelete={HandleDelete}
          toggleTodoAsCompleted={toggleTodoAsCompleted}
        />
      );
    });
  };

  const HandleDelete = (id: string) => {
    // console.log("This particular id is deleted", id);
    setTodoData(TodoData.filter((item) => item.id !== id));
  };

  // mark completed
  const toggleTodoAsCompleted = (id: string) => {
    // Toggle the completion status
    setTodoData((prev) => {
      let newTodo = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("TodoData", JSON.stringify(newTodo));

      // Update the URL based on the current filter
      const updatedUrl =
        Todo === "completed"
          ? `/?TodoData=completed`
          : Todo === "active"
          ? `/?TodoData=active`
          : "/";
      navigate(updatedUrl); // Use navigate for navigation

      return newTodo;
    });
  };

  return (
    <>
      {RenderNotesList() && RenderNotesList().length > 0 && (
        <h3 className="FontFamily">Todo_List</h3>
      )}

      {RenderNotesList()}
    </>
  );
};

export default TodoList;
