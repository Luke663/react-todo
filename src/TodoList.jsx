import { TodoItem } from "./TodoItem";
import PropTypes from "prop-types";

TodoList.propTypes = {
  // List of to-dos to be displayed in group container
  todos: PropTypes.array.isRequired,
  // Callback for toggling completed status
  toggleTodo: PropTypes.func.isRequired,
  // Callback for to-do deletion
  deleteTodo: PropTypes.func.isRequired,
};

// Grouping object to contain to-dos
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* Inform user the aren't any to-dos */}
      {todos.length === 0 && "No Todos..."}

      {/* Draw the current to-dos in this specific group */}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
