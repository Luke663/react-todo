import PropTypes from "prop-types";

TodoItem.propTypes = {
  // To-do's ID
  id: PropTypes.string.isRequired,
  // To-do's content/subject
  title: PropTypes.string.isRequired,
  // To-do's completed status
  completed: PropTypes.bool.isRequired,
  // Callback for toggling completed status
  toggleTodo: PropTypes.func.isRequired,
  // Callback for to-do deletion
  deleteTodo: PropTypes.func.isRequired,
};

// Individual to-do item (checkbox, text content, delete button)
export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li key={id}>
      <label>
        {/* Unfinished/finished checkbox */}
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />

        {/* To-do content */}
        <span>{title}</span>
      </label>

      {/* Delete button */}
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
