import BacklogFooter from "../../../components/Backlog/BacklogFooter";
import {
  footerCss,
  progress_bar,
  sprint_backlog_undone,
} from "../../../utils/SprintBacklogData";
import { randomArray } from "../../../utils/RadomArray";
import { useState, useEffect } from "react";

function SprintBacklogList() {
  const [undone, setUndone] = useState(
    randomArray(sprint_backlog_undone, sprint_backlog_undone.length)
  );
  const [done, setdone] = useState([1, 2, 3, 4]);
  const [progressBar, setProgressBar] = useState(progress_bar);
  const [progressPoint, setProgressPoint] = useState(0);

  return (
    <div className="container sprint_backlog_list">
      <div className="sprint_backlog_list_body">
        <div className="dropbox dropbox_undone">
          <div className="title_undone">
            <h3>產品待辦清單</h3>
            <h4>Product Backlog</h4>
          </div>
          <ul className="dragbox dragbox_undone">
            {undone.map((item) => (
              <li key={item.id} className="dragbox_item">
                <div className="dragbox_box dragbox_have_item dragbox_undone_item">
                  <div className="dragbox_title">
                    <h4 style={item.content ? { marginBottom: "8px" } : {}}>
                      {item.title}
                    </h4>
                    <h5>{item.content}</h5>
                  </div>
                  <ul className="point_bar">
                    <li className="point">{item.point}點</li>
                    {item.progress.map((progress) => (
                      <li className="progress" key={progress}></li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
          <ul className="dragbox dragbox_done">
            {done.map((item) => (
              <li key={item.id} className="dragbox_item dragbox_done_item">
                <div className="dragbox_box"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BacklogFooter
        last={"/sprint_backlog"}
        next={"/sprint"}
        btnTxt={"準備好了！開始 Sprint"}
        css={footerCss}
      />
    </div>
  );
}

export default SprintBacklogList;
