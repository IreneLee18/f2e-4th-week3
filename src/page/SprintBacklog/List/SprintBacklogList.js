import RD from "../../../style/image/character/RD.png";
import SprintBacklogListItem from "../../../components/Backlog/BacklogListItem";
import BacklogFooter from "../../../components/Backlog/BacklogFooter";
import Modal from "../../../components/Modal/Modal";
import {
  footerCss,
  progress_bar_init,
  progress_bar_5,
  progress_bar_8,
  progress_bar_13,
  progress_bar_16,
  progress_bar_18,
  sprint_backlog_undone,
} from "../../../utils/data/SprintBacklogData";
import { randomArray } from "../../../utils/RadomArray";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState, useRef } from "react";

function SprintBacklogList() {
  const [undone, setUndone] = useState(
    randomArray(sprint_backlog_undone, sprint_backlog_undone.length)
  );
  const [done, setDone] = useState([]);
  const [progressBar, setProgressBar] = useState(progress_bar_init);
  const progressPoint = useRef(0);
  const modalRef = useRef();

  const getPoint = (toArea, selectedPoint) => {
    let point = 0;
    for (let i = 0; i < done.length; i++) {
      point = point + done[i].point;
    }
    if (toArea === "done") {
      point = point + selectedPoint;
    } else {
      point = point - selectedPoint;
    }
    progressPoint.current = point;
    console.log(progressPoint.current, point);
  };

  const getProgressPoint = (point) => {
    switch (point) {
      case 5:
        return setProgressBar(progress_bar_5);
      case 8:
        return setProgressBar(progress_bar_8);
      case 13:
        return setProgressBar(progress_bar_13);
      case 16:
        return setProgressBar(progress_bar_16);
      case 18:
        return setProgressBar(progress_bar_18);
      default:
        new Error("error");
    }
  };

  // 結束拖曳
  const onDragEnd = (e) => {
    const { source, destination } = e;
    console.log(e);
    let selected;
    let isUndone = [...undone];
    let isDone = [...done];

    // 如果拖曳到 drop 以外的空間就 return
    if (!destination) return;

    // 如果拖曳到起始是同樣的位置就 return
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // 如果拖曳起始是同樣的 droppableId 就 return
    if (destination.droppableId === source.droppableId) return;

    if (source.droppableId.includes("undone")) {
      // drag undone area item to done area
      selected = isUndone[source.index];
      getPoint("done", selected.point);
      if (progressPoint.current < 20) {
        isUndone.splice(source.index, 1);
        isDone.splice(destination.index, 0, selected);
      } else {
        modalRef.current.openModal();
      }
    } else {
      // drag done area item to undone area
      selected = isDone[source.index];
      getPoint("undone", selected.point);
      isDone.splice(source.index, 1);
      isUndone.splice(destination.index, 0, selected);
    }

    setDone(isDone);
    setUndone(isUndone);
    getProgressPoint(progressPoint.current);
  };
  return (
    <>
      <div className="container view90_center_mb48 sprint_backlog_list">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="sprint_backlog_list_body">
            {/* undone */}
            <div className="dropbox dropbox_undone">
              <div className="title_undone">
                <h3>產品待辦清單</h3>
                <h4>Product Backlog</h4>
              </div>
              <Droppable droppableId="undone">
                {(provided, snapshot) => (
                  <ul
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="dragbox dragbox_undone"
                  >
                    {undone.map((item, index) => (
                      <SprintBacklogListItem
                        key={item.id ? `undone_${item.id}` : `undone_${index}`}
                        todo={item}
                        i={index}
                        type="undone"
                        // active={snapshot.isDraggingOver}
                      />
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>

            {/* done */}
            <div className="dropbox dropbox_done">
              <div className="title_done">
                <h3>開發 A 組的短衝待辦清單</h3>
                <h4>20 點 / 5 人</h4>
              </div>
              <ul className="progress_bar">
                {progressBar.map((item) => (
                  <li key={item.id} style={{ background: item.color }}></li>
                ))}
              </ul>
              <Droppable droppableId="done">
                {(provided, snapshot) => (
                  <ul
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="dragbox dragbox_done"
                    style={
                      done && done.length === 0
                        ? {
                            minHeight: " 472px",
                          }
                        : {}
                    }
                  >
                    {done &&
                      done.map((item, index) => (
                        <SprintBacklogListItem
                          key={item.id ? `done_${item.id}` : `done_${index}`}
                          todo={item}
                          i={index}
                          type="done"
                        />
                      ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
          </div>
        </DragDropContext>
        <BacklogFooter
          last={"/sprint_backlog"}
          next={"/sprint"}
          btnTxt={"準備好了！開始 Sprint"}
          css={footerCss}
        />
      </div>
      <Modal
        ref={modalRef}
        character={RD}
        text={["超過20點了！"]}
        btn_text={"再調整看看！"}
      />
    </>
  );
}

export default SprintBacklogList;
