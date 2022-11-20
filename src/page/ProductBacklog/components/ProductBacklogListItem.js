// import { forwardRef } from "react";
// import { Draggable } from "react-beautiful-dnd";
// function ProductBacklogListItem({ todo, i, type },ref) {
//   return (
//     <>
//       {type === "undone" ? (
//         <li key={todo.id}>
//           <Draggable draggableId={todo.id} index={i}>
//             {(provided) => (
//               <div
//                 className="undone_item have_item"
//                 ref={provided.innerRef}
//                 {...provided.draggableProps}
//                 {...provided.dragHandleProps}
//               >
//                 <h4 style={todo.content ? { marginBottom: "8px" } : {}}>
//                   {todo.title}
//                 </h4>
//                 <h5>{todo.content}</h5>
//               </div>
//             )}
//           </Draggable>
//         </li>
//       ) : (
//         <li>
//           <Draggable draggableId={todo.id ? todo.id : i.toString()} index={i}>
//             {(provided) => (
//               <div
//                 className={todo.id ? "have_item" : "done_item"}
//                 ref={provided.innerRef}
//                 {...provided.draggableProps}
//                 {...provided.dragHandleProps}
//               >
//                 <h4>{todo?.title}</h4>
//                 <h5>{todo?.content}</h5>
//               </div>
//             )}
//           </Draggable>
//         </li>
//       )}
//     </>
//   );
// }

// export default forwardRef(ProductBacklogListItem);

import { forwardRef } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
function ProductBacklogListItem({ todo, i, type }, ref) {
  return (
    <>
      <Droppable droppableId={`${type}_${i}`}>
        {(provided, snapshot) => (
          <li
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={
              type === "undone"
                ? snapshot.isDraggingOver
                  ? "undone_active"
                  : ""
                : snapshot.isDraggingOver
                ? "done_active"
                : ""
            }
            style={
              type === "done" && todo.id
                ? { border: "none", position: "relative" }
                : {}
            }
          >
            <Draggable
              draggableId={
                type === "undone" ? `${type}_${todo.id}` : `${type}_${i}`
              }
              index={i}
            >
              {(provided) => (
                <div
                  className={
                    type === "undone"
                      ? todo.id
                        ? `undone_item have_item`
                        : ""
                      : todo.id
                      ? `have_item`
                      : `done_item`
                  }
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <h4 style={todo.content ? { marginBottom: "8px" } : {}}>
                    {todo.title}
                  </h4>
                  <h5>{todo.content}</h5>
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

export default forwardRef(ProductBacklogListItem);
