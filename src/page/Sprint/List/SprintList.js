import Description from "../../../components/Description/Description";
import BacklogFooter from "../../../components/Backlog/BacklogFooter";
import Modal from "../../../components/Modal/Modal";
import RD from "../../../style/image/character/RD.png";
import {
  sprint_list_correct_ID,
  description_list,
  sprint_list_left,
  sprint_list_undone,
  sprint_list_done,
} from "../../../utils/data/SprintData";
import { randomArray } from "../../../utils/RadomArray";
import useModal from "../../../hooks/UseModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
function SprintList() {
  const [undone, setUndone] = useState(
    randomArray(sprint_list_undone, sprint_list_undone.length)
  );
  const [done, setDone] = useState(sprint_list_done);
  // modal
  const modalRef = useRef();
  const { modalText, modalBtnText, handleClickFinish } = useModal(
    modalRef,
    done,
    sprint_list_correct_ID
  );

  const onDragEnd = (e) => {
    const { source, destination } = e;
    console.log(e);
    let selected;
    let isUndone = [...undone];
    let isDone = [...done];

    // 如果拖曳到 drop 以外的空間就 return
    if (!destination) return;

    let sourceIndex =
      source.droppableId !== "undone"
        ? source.droppableId.substring(
            source.droppableId.length - 1,
            source.droppableId.length
          )
        : source.index;
    let destinationIndex =
      destination.droppableId !== "undone"
        ? destination.droppableId.substring(
            destination.droppableId.length - 1,
            destination.droppableId.length
          )
        : destination.index;

    // 如果拖曳到起始是同樣的位置就 return
    if (
      destination.droppableId === source.droppableId &&
      destinationIndex === sourceIndex
    )
      return;

    // 如果拖曳起始是同樣的 droppableId 就 return
    if (destination.droppableId === source.droppableId) return;

    // 起始：undone
    if (source.droppableId.includes("undone")) {
      selected = isUndone[sourceIndex];

      // 如果放的位置在 undone && undone 沒有資料，就賦予值
      if (
        destination.droppableId.includes("undone") &&
        !isUndone[destinationIndex]?.id
      ) {
        isUndone.splice([sourceIndex], 1);
        isUndone[destinationIndex] = selected;
      }

      // 如果放的位置在 done && done 沒有資料，就賦予值
      if (
        destination.droppableId.includes("done") &&
        !isDone[destinationIndex]?.id
      ) {
        isUndone.splice([sourceIndex], 1);
        isDone[destinationIndex] = selected;

        // 如果放的位置在 done && done 有資料，就互換
      } else if (
        destination.droppableId.includes("done") &&
        isDone[destinationIndex]?.id
      ) {
        isUndone[sourceIndex] = isDone[destinationIndex];
        isDone[destinationIndex] = selected;
      }

      // 起始：done
    } else {
      selected = isDone[sourceIndex];
      // 如果有資料就互換；沒有就清空起始位置
      if (isDone[destinationIndex]?.id) {
        isDone[sourceIndex] = isDone[destinationIndex];
      } else {
        isDone[sourceIndex] = {};
      }
      isDone[destinationIndex] = selected;
      console.log(selected);
    }

    setDone(isDone);
    setUndone(isUndone);
  };

  const [isMobile, setIsMobile] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 820) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <>
      <div className="container view90_center_mb48 sprint_list">
        <Description character={description_list} />
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="sprint_list_body">
            <div className="sprint_list_done">
              <ul className="sprint_list_left">
                {sprint_list_left.map((item) => (
                  <li key={item}>
                    <div>
                      <h4>{item}</h4>
                    </div>
                  </li>
                ))}
              </ul>
              {/* PC Size */}
              {!isMobile && (
                <ul className="sprint_list_right">
                  <li className="done_list_start"></li>
                  <li className="done_list">
                    {done.map((todo, index) => (
                      <Droppable droppableId={`done_${index}`} key={nanoid()}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            key={nanoid()}
                            className={`dragbox_item ${
                              snapshot.isDraggingOver && "dragbox_done_active"
                            } ${todo.id && "dragbox__have_item"}`}
                          >
                            <Draggable
                              draggableId={`done_${index}`}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`dragbox_box dragbox_box_${index} ${
                                    snapshot.isDragging && `dragbox_active`
                                  }`}
                                >
                                  <div className="dragbox_title">
                                    <h4
                                      style={
                                        todo.content
                                          ? { marginBottom: "8px" }
                                          : {}
                                      }
                                    >
                                      {todo.ch_title}
                                      {snapshot.isDraggingOver}
                                    </h4>
                                    <h5>{todo.eg_title}</h5>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    ))}
                  </li>
                </ul>
              )}
              {/* Mobile Size */}
              {isMobile && (
                <ul className="sprint_list_right_mobile">
                  <li className="sprint">
                    <h3>短衝</h3>
                    <h3>Sprint</h3>
                  </li>
                  <li className="sprint_done_list">
                    {done.map((todo, index) => (
                      <Droppable droppableId={`done_${index}`} key={nanoid()}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            key={nanoid()}
                            className={`sprint_done_list_item ${
                              snapshot.isDraggingOver && "dragbox_done_active"
                            } ${todo.id && "dragbox__have_item"}`}
                          >
                            <Draggable
                              draggableId={todo?.id ? todo.id : `done_${index}`}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`dragbox_box ${
                                    snapshot.isDragging && `dragbox_active`
                                  }`}
                                >
                                  <div className="dragbox_title">
                                    <h4
                                      style={
                                        todo.content
                                          ? { marginBottom: "8px" }
                                          : {}
                                      }
                                    >
                                      {todo.ch_title}
                                      {snapshot.isDraggingOver}
                                    </h4>
                                    <h5>{todo.eg_title}</h5>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    ))}
                  </li>
                </ul>
              )}
            </div>
            <Droppable droppableId="undone">
              {(provided) => (
                <ul
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="sprint_list_undone"
                >
                  {undone.map((todo, index) => (
                    <Draggable
                      draggableId={todo?.id ? todo.id : `undone_${index}`}
                      index={index}
                      key={todo.id}
                    >
                      {(provided, snapshot) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`dragbox_item dragbox__have_item ${
                            snapshot.isDragging && "dragbox_active"
                          }`}
                        >
                          <div className="dragbox_box">
                            <div className="dragbox_title">
                              <h4
                                style={
                                  todo.content ? { marginBottom: "8px" } : {}
                                }
                              >
                                {todo.ch_title}
                              </h4>
                              <h5>{todo.eg_title}</h5>
                            </div>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </DragDropContext>
        <BacklogFooter
          last={"/sprint"}
          btnTxt={"完成了～"}
          handleClickOpenModal={handleClickFinish}
        />
      </div>
      <Modal
        ref={modalRef}
        character={RD}
        text={modalText}
        btn_text={modalBtnText}
      />
    </>
  );
}

export default SprintList;
