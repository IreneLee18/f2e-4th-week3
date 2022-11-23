import { forwardRef } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useLocation } from "react-router-dom";
function BacklogListItem({ todo, i, type }, ref) {
  const { pathname } = useLocation();
  return (
    <>
      {pathname.includes("product_backlog_list") && (
        <>
          <Droppable droppableId={`${type}_${i}`}>
            {(provided, snapshot) => (
              <li
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`dragbox_item ${snapshot.isDraggingOver&&'dragbox_done_active'}`}
                style={
                  type === "done" && todo.id
                    ? { border: "none", position: "relative" }
                    : {}
                }
              >
                <Draggable
                  draggableId={todo.id ? `${type}_${todo.id}` : `${type}_${i}`}
                  index={i}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`dragbox_box ${
                        type === "undone"
                          ? todo.id && `dragbox_undone_item dragbox_have_item`
                          : todo.id
                          ? `dragbox_have_item`
                          : `dragbox_done_item`
                      } ${snapshot.isDragging && "dragbox_undone_active"}`}
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
      )}
      {pathname.includes("sprint_backlog_list") && (
        <>
          <li key={todo.id} className="dragbox_item">
            <Draggable
              draggableId={todo.id ? `${type}_${todo.id}` : `${type}_${i}`}
              index={i}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`dragbox_box ${todo.id && "dragbox_have_item"} ${
                    type === "undone" && "dragbox_undone_item"
                  } ${snapshot.isDragging && "dragbox_active"}`}
                >
                  <div className="dragbox_title">
                    <h4 style={todo.content ? { marginBottom: "8px" } : {}}>
                      {todo.title}
                    </h4>
                    <h5>{todo.content}</h5>
                  </div>
                  <ul className="point_bar">
                    <li className="point">
                      {todo.point}
                      {todo.id && "點"}
                    </li>
                    {todo.progress &&
                      todo.progress.map((progress) => (
                        <li className="progress" key={progress}></li>
                      ))}
                  </ul>
                </div>
              )}
            </Draggable>
          </li>
        </>
      )}
    </>
  );
}

export default forwardRef(BacklogListItem);
