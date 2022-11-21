import { forwardRef } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
function BacklogListItem({ todo, i, type }, ref) {
  return (
    <>
      <Droppable droppableId={`${type}_${i}`}>
        {(provided, snapshot) => (
          <li
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`dragbox_item ${
              type === "undone"
                ? snapshot.isDraggingOver
                  ? "dragbox_undone_active"
                  : ""
                : snapshot.isDraggingOver
                ? "dragbox_done_active"
                : ""
            }`}
            style={
              type === "done" && todo.id
                ? { border: "none", position: "relative" }
                : {}
            }
          >
            <Draggable
              draggableId={
                todo.id ? `${type}_${todo.id}` : `${type}_${i}`
              }
              index={i}
            >
              {(provided) => (
                <div
                  className={`dragbox_box ${
                    type === "undone"
                      ? todo.id
                        ? `dragbox_undone_item dragbox_have_item`
                        : ""
                      : todo.id
                      ? `dragbox_have_item`
                      : `dragbox_done_item`
                  }`}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div className="dragbox_title">
                    <h4 style={todo.content ? { marginBottom: "8px" } : {}}>
                      {todo.title}
                    </h4>
                    <h5>{todo.content}</h5>
                  </div>
                </div>
              )}
            </Draggable>
            {provided.placeholder}
          </li>
        )}
      </Droppable>
    </>
  );
}

export default forwardRef(BacklogListItem);
