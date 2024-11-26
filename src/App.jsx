import "./styles.css";
import { useEffect, useState } from "react";
import { GroupList } from "./GroupList";

export default function App() {
  // Sets state (current groups) with callback via local memory if state has been
  // previously saved
  const [groups, setGroups] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");

    if (localValue === null) return [];

    return JSON.parse(localValue);
  });

  // Stores group list upon list alteration
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(groups));
  }, [groups]);

  // Adds a new group to groups using ES6 JavaScript syntax to set groups via a callback.
  // Creating a new list from the existing list with a new group appended to the end.
  function addGroup() {
    setGroups((currentGroups) => {
      return [
        ...currentGroups,
        { id: crypto.randomUUID(), deleteGroup: deleteGroup },
      ];
    });
  }

  // Filters the groups list to exclude the one with the matching ID.
  // Updates the state with the new list.
  function deleteGroup(id) {
    setGroups((currentGroups) => {
      return currentGroups.filter((group) => group.id !== id);
    });

    // Delete group data from storage if group was not empty
    localStorage.removeItem(`ITEMS-${id}`);
  }

  return (
    <>
      {/* App title */}
      <h1 className="header">To-Do List</h1>

      {/* Group controls */}
      <div className="right-alligned-container">
        <button className="btn group-control" onClick={() => addGroup()}>
          + Add Group
        </button>
      </div>

      {/* Groups container object */}
      <GroupList groups={groups} deleteGroup={deleteGroup} />
    </>
  );
}
