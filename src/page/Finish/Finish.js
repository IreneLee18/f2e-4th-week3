import { Link } from "react-router-dom";
const tableArr3 = [...Array(3).keys()];
function Finish() {
  return (
    <div className="container finish">
      <ul className="tables">
        {tableArr3.map((item) => (
          <li className="table" key={item}></li>
        ))}
      </ul>
      <Link to="/">
        <div className="finish_congrats"></div>
      </Link>
      <div className="finish_title">
        <div className="type h1_type">
          <h1>恭喜通過 Scrum 新手村！</h1>
        </div>
        <div className="type h2_type">
          <h2>正式加入 TT 資訊 開發 A 組！</h2>
        </div>
      </div>
      <ul className="finish_character">
        <li className="po_image"></li>
        <li className="tica_image"></li>
        <li className="sm_image"></li>
        <li className="rd_image"></li>
      </ul>
    </div>
  );
}

export default Finish;
