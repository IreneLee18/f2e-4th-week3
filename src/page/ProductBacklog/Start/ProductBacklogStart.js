import BacklogFooter from "../../../components/Backlog/BacklogFooter";
import GSAP from "../../../utils/GSAP";
import { useRef, useEffect } from "react";
const tableArr3 = [...Array(3).keys()];
const text =
  "我是 TT 資訊，開發 A 組的 PO，粉紅豬。<br/><br/>PO也就是產品負責人（Product Owner）。<br/><br/> 產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（ProductBacklog）唷！<br/><br/>剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！";
function ProductBacklogStart() {
  const content_txt = useRef();
  useEffect(() => {
    if (content_txt.current) {
      GSAP(".content_txt", text);
    }
  });
  return (
    <div className="container product_backlog_start">
      <ul className="tables">
        {tableArr3.map((item) => (
          <li className="table" key={item}></li>
        ))}
      </ul>
      <div className="view90_center_mb48">
        <div className="product_backlog_body">
          <div className="character"></div>
          <div className="text">
            <h4 className="content_txt" ref={content_txt}></h4>
          </div>
        </div>
        <BacklogFooter
          last={"/roles"}
          next={"/product_backlog_list"}
          btnTxt={"接受挑戰！"}
        />
      </div>
    </div>
  );
}

export default ProductBacklogStart;
