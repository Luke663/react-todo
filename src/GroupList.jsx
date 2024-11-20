import { TodoGroup } from "./TodoGroup";
import PropTypes from "prop-types";

GroupList.propTypes = {
  // List of to-do groups to be displayed in app
  groups: PropTypes.array.isRequired,
  // Callback for group deletion
  deleteGroup: PropTypes.func.isRequired,
};

// Grouping object to contain to-do groups
export function GroupList({ groups, deleteGroup }) {
  return (
    <ul className="list">
      {/* Inform user the aren't any groups */}
      {groups.length === 0 && "No Groups..."}

      {/* Draw the current groups */}
      {groups.map((group) => {
        return (
          <TodoGroup key={group.id} _id={group.id} deleteGroup={deleteGroup} />
        );
      })}
    </ul>
  );
}
