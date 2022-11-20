import ProductBacklogFooter from "../components/ProductBacklogFooter";
import {
  product_backlog_undone,
  product_backlog_done,
} from "../../../utils/Data";
import { useState } from "react";

function ProductBacklogList() {
  const [undone, setUndone] = useState(product_backlog_undone);
  const [done, setDone] = useState(product_backlog_done);
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
        <div className="product_backlog_list_body">
          {/* undone */}
          <div className="dropbox">
            <div className="title">
              <h3>產品待辦清單</h3>
              <h4>Product Backlog</h4>
            </div>
            <ul className="undone">
              {undone.map((item) => (
                <li key={item.id}>
                  <div className="undone_item have_item">
                    <h4 style={item.content ? { marginBottom: "8px" } : {}}>
                      {item.title}
                    </h4>
                    <h5>{item.content}</h5>
                  </div>
                </li>
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
          <div className="dropbox">
            <ul className="done">
              {done.map((item, i) => (
                <li key={item.id ? item.id : i}>
                  <div className={item.id ? "have_item" : "done_item"}>
                    <h4>{item?.title}</h4>
                    <h5>{item?.content}</h5>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ProductBacklogFooter
          last={"/product_backlog"}
          next={"spring_planning"}
          btnTxt={"我完成了"}
        />
      </div>
    </>
  );
}

export default ProductBacklogList;
