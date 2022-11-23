import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function useModal(modalRef,done,correctDoneID) {
  const { pathname } = useLocation();
  const [doneID, setDoneID] = useState("");

  // modal
  const [modalText, setModalText] = useState([]);
  const [modalBtnText, setModalBtnText] = useState("");
  const handleClickFinish = () => {
    modalRef.current.openModal();
    if (doneID.includes("null")) {
      // 沒填完
      setModalBtnText("返回挑戰");
      setModalText(["咦～你好像還沒完成唷！"]);
      return;
    }

    if (doneID === correctDoneID) {
      // 填完正確
      setModalBtnText("前往下個挑戰");

      if (pathname.includes("product_backlog_list"))
        setModalText([
          "你做得非常好！",
          "你已經能掌握基礎產品代辦清單的優先度排序",
          "接下來再繼續挑戰吧！",
        ]);
      if (pathname.includes("sprint_list"))
        setModalText([
          "你做得非常好！",
          "你已經了解短衝的流程，",
          "接下來再繼續挑戰吧！",
        ]);
    } else {
      // 填完錯誤
      setModalBtnText("再試試看");
      if (pathname.includes("product_backlog_list"))
        setModalText(["順序可以再調整看看唷！"]);

      if (pathname.includes("sprint_list"))
        setModalText(["差一點！", "再思考一下流程，你可以的！"]);
    }
  };
  useEffect(() => {
    let doneId =
      done && done.map((item) => (item.id ? item.id : "null")).join("_");
    setDoneID(doneId);
  }, [done]);

  return { modalText, modalBtnText, handleClickFinish };
}

export default useModal;