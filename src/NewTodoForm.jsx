import { useState } from "react";
import PropTypes from "prop-types";

NewTodoForm.propTypes = {
  // Callback to pass new to-do content back to TodoGroup object for creation
  onSubmit: PropTypes.func.isRequired,
};

// Component consiting of label, input, and button for adding new to-dos to a to-do group.
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  // Calls passed callback function (onSumbit) to add new to-do
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        {/* Label */}
        <label htmlFor="item">New to-do:</label>

        {/* Input box */}
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>

      {/* Add to-do button */}
      <button className="btn">Add</button>
    </form>
  );
}
