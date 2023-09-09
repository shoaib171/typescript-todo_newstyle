/** @format */

import * as React from "react";
import { TodoModel } from "../Types/TodoModel";

interface ICardProps {
  task: TodoModel;
  HandleDelete: (id: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
}

const TodoCard: React.FC<ICardProps> = ({
  task,
  HandleDelete,
  toggleTodoAsCompleted,
}) => {
  const capitalizedTitle =
    task.title.charAt(0).toUpperCase() + task.title.slice(1).toLowerCase();
  const TextStyle = {
    textDecoration: task.completed ? "line-through" : "none",
    color: task.completed ? "red" : "inherit",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <ul className="TextStyle" key={task.id}>
            <li className=" bg-light shadow-sm p-2 rounded-3 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="me-2"
                  checked={task.completed}
                  onChange={() => toggleTodoAsCompleted(task.id)}
                />
                <span style={TextStyle}>{capitalizedTitle}</span>
              </div>
              {task.completed && (
                <i
                  className="fa fa-trash text-danger fs-4"
                  aria-hidden="true"
                  onClick={() => HandleDelete(task.id)}
                  style={{ cursor: "pointer" }}
                ></i>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
