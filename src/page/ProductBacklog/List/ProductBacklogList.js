import PO from "../../../style/image/character/PO.png";
import ProductBacklogListItem from "../../../components/Backlog/BacklogListItem";
import BacklogFooter from "../../../components/Backlog/BacklogFooter";
import Modal from "../../../components/Modal/Modal";
import {
  product_backlog_undone,
  product_backlog_done,
  product_backlog_correct_done,
} from "../../../utils/ProductBacklogData";
import { randomArray } from "../../../utils/RadomArray";
import { DragDropContext } from "react-beautiful-dnd";
import { useState, useRef, useEffect } from "react";

function ProductBacklogList() {
  const [undone, setUndone] = useState(
    randomArray(product_backlog_undone, product_backlog_undone.length)
  );
  const [done, setDone] = useState(product_backlog_done);
  const [doneID, setDoneID] = useState("");
  const [footerCss, setFooterCss] = useState({});
  // modal
  const [modalText, setModalText] = useState([]);
  const [modalBtnText, setModalBtnText] = useState("");
  const modalRef = useRef();
  const handleClickFinish = () => {
    modalRef.current.openModal();

    if (doneID.includes("null")) {
      // 沒填完
      setModalText(["咦～你好像還沒完成唷！"]);
      setModalBtnText("返回挑戰");
      return;
    }

    if (doneID === product_backlog_correct_done) {
      // 填完正確
      setModalText([
        "你做得非常好！",
        "你已經能掌握基礎產品代辦清單的優先度排序",
        "接下來再繼續挑戰吧！",
      ]);
      setModalBtnText("前往下個挑戰");
    } else {
      // 填完錯誤
      setModalText(["順序可以再調整看看唷！"]);
      setModalBtnText("再試試看");
    }
  };

  // 結束拖曳
  const onDragEnd = (e) => {
    const { source, destination } = e;
    let selected;
    let isUndone = [...undone];
    let isDone = [...done];

    let sourceIndex = source.droppableId.substring(
      source.droppableId.length - 1,
      source.droppableId.length
    );
    let destinationIndex = destination.droppableId.substring(
      destination.droppableId.length - 1,
      destination.droppableId.length
    );

    // 如果拖曳到 drop 以外的空間就 return
    if (!destination) return;

    // 如果拖曳到起始同樣的位置就 return
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // done 資料不能丟回 undone
    if (
      source.droppableId.includes("done") &&
      destination.droppableId.includes("undone")
    )
      return;

    if (source.droppableId.includes("undone")) {
      selected = isUndone[sourceIndex];

      // 如果放的位置在 undone && undone 沒有資料，就賦予值
      if (
        destination.droppableId.includes("undone") &&
        !isUndone[destinationIndex]?.id
      ) {
        isUndone[sourceIndex] = {};
        isUndone[destinationIndex] = selected;
      }

      // 如果放的位置在 done && done 沒有資料，就賦予值
      if (
        destination.droppableId.includes("done") &&
        !isDone[destinationIndex]?.id
      ) {
        isUndone[sourceIndex] = {};
        isDone[destinationIndex] = selected;
      }
    } else {
      selected = isDone[sourceIndex];
      // 如果有資料就互換
      if (isDone[destinationIndex]?.id) {
        isDone[sourceIndex] = isDone[destinationIndex];
      } else {
        isDone[sourceIndex] = {};
      }
      isDone[destinationIndex] = selected;
      console.log(selected)
    }

    setDone(isDone);
    setUndone(isUndone);
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 820) {
      setFooterCss({ padding: "20px 0" });
    } else {
      setFooterCss({});
    }
  });
  useEffect(() => {
    let doneId = done.map((item) => (item.id ? item.id : "null")).join("_");
    setDoneID(doneId);
  }, [done]);

  return (
    <>
      <div className="container product_backlog_list">
        <div className="product_backlog_list_header">
          <div className="character"></div>
          <div className="text">
            <div>
              <h4>請試著把需求放到產品待辦清單，並調整待辦的優先度順序。</h4>
              <h4>我們公司也推薦使用 Jira 來做任務的管理呢！</h4>
            </div>
            <div className="jira_logo"></div>
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="product_backlog_list_body">
            {/* undone */}
            <div className="dropbox undone_dropbox">
              <div className="title_undone">
                <h3>產品待辦清單</h3>
                <h4>Product Backlog</h4>
              </div>
              <ul className="dragbox dragbox_undone">
                {undone.map((item, index) => (
                  <ProductBacklogListItem
                    key={item.id ? `undone_${item.id}` : `undone_${index}`}
                    todo={item}
                    i={index}
                    type="undone"
                  />
                ))}
              </ul>
            </div>
            <div className="sort">
              <ul>
                <li>優先度高</li>
                <li>優先度低</li>
              </ul>
            </div>
            {/* done */}
            <div className="dropbox done_dropbox">
              <ul className="dragbox dragbox_done">
                {done.map((item, index) => (
                  <ProductBacklogListItem
                    key={item.id ? `done_${item.id}` : `done_${index}`}
                    todo={item}
                    i={index}
                    type="done"
                  />
                ))}
              </ul>
            </div>
          </div>
        </DragDropContext>
        <BacklogFooter
          last={"/product_backlog"}
          btnTxt={"我完成了"}
          handleClickOpenModal={handleClickFinish}
          css={footerCss}
        />
      </div>
      <Modal
        ref={modalRef}
        character={PO}
        text={modalText}
        btn_text={modalBtnText}
      />
    </>
  );
}

export default ProductBacklogList;
