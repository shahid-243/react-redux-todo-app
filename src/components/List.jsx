import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, editTodoAction } from "../redux/action/todo.action";

export default function List() {
  let todos = useSelector(state => state.todos);
  const dispatch = useDispatch()
  const editData = useSelector(state => state.editData);

  return (
    <ul className="list-group mt-4">
      {
        todos.length > 0 ? todos.map((todo, index) => (
            <li className="list-group-item d-flex justify-content-between"  key={index}>
                <div>
                {todo}
                </div>
                <div>
                    <button className="btn btn-warning btn-sm me-4"
                    onClick={() => dispatch(editTodoAction(index, todo))}
                    disabled={editData.index !== -1 ? true : false}>Edit</button>
                    <button className="btn btn-sm btn-danger"
                    onClick={() => dispatch(deleteTodoAction(todo)) }
                    disabled={editData.index !== -1 ? true : false}>Delete</button>
                </div>
            </li>
        )): <li className="list-group-item">No Todo</li>
      }
    </ul>
  )
}
