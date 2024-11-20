import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import PropTypes from "prop-types";

TodoGroup.propTypes = {
  _id: PropTypes.string.isRequired, // Unique ID given to each group object
  deleteGroup: PropTypes.func.isRequired, // Callback function to delete group
};

// To-do group, allows grouping of to-dos and individual management of each group
export function TodoGroup({ _id, deleteGroup }) {
  // Sets state (current group's to-dos) with callback via local memory if state has been saved
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem(`ITEMS-${_id}`);

    if (localValue === null) return [];

    return JSON.parse(localValue);
  });

  // Stores to-do list upon list alteration
  useEffect(() => {
    localStorage.setItem(`ITEMS-${_id}`, JSON.stringify(todos));
  }, [_id, todos]);

  // Adds a new to-do to to-dos using ES6 JavaScript syntax to set to-dos via a callback.
  // Creating a new list from the existing list with a new to-do appended to the end.
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // Toggles the completed status of a to-do by ID.
  // Updates the state with a new list where the matching to-do has its
  // completed status updated, while all other to-dos remain unchanged.
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }; // Update the completed status of the matching to-do.
        }

        return todo; // Leave other to-dos unchanged.
      });
    });
  }

  // Filters the to-dos list to exclude the one with the matching ID.
  // Updates the state with the new list.
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="group-container">
      {/* To-do list */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

      {/* Form to allow addition of to-dos */}
      <NewTodoForm onSubmit={addTodo} />

      {/* Footer to allow deletion of group via delete button */}
      <div className="right-alligned-container">
        <button className="btn btn-danger" onClick={() => deleteGroup(_id)}>
          Delete Group
        </button>
      </div>
    </div>
  );
}
