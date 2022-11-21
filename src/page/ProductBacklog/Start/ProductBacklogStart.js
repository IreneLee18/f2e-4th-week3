import BacklogFooter from "../../../components/Backlog/BacklogFooter";
const tableArr3 = [...Array(3).keys()];
function ProductBacklogStart() {
  return (
    <div className="container product_backlog_start">
      <ul className="tables">
        {tableArr3.map((item) => (
          <li className="table" key={item}></li>
        ))}
      </ul>
      <div className="product_backlog_body">
        <div className="character"></div>
        <div className="text">
          <div>
            <h4>我是 TT 資訊，開發 A 組的 PO，粉紅豬。</h4>
            <h4>PO也就是產品負責人（Product Owner）。</h4>
            <h4>
              產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product
              Backlog）唷！
            </h4>
            <h4>
              剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。
              既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
            </h4>
          </div>
        </div>
      </div>
      <BacklogFooter
        last={"/roles"}
        next={"/product_backlog_list"}
        btnTxt={"接受挑戰！"}
      />
    </div>
  );
}

export default ProductBacklogStart;
