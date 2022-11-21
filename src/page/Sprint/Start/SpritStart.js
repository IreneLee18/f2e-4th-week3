import BacklogFooter from "../../../components/Backlog/BacklogFooter";
import {
  direction,
  navbar,
  daily_content,
  review_content,
  retrospective_content,
} from "../../../utils/SprintData";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

function SpritStart() {
  const [currentNav, setCurrentNav] = useState("daily");
  const [currentNavContent, setCurrentNavContent] = useState(daily_content);
  const handleClickNav = (e) => {
    const { id } = e.target;
    setCurrentNav(id);
    switch (id) {
      case "daily":
        return setCurrentNavContent(daily_content);
      case "review":
        return setCurrentNavContent(review_content);
      case "retrospective":
        return setCurrentNavContent(retrospective_content);
      default:
        new Error("error");
    }
  };
  return (
    <div className="container sprint_start view90_center_mb48">
      <div className={`direction direction_${direction.id}`}>
        <div className="direction_character">
          <div
            className={`direction_character_image ${direction.id}_image`}
          ></div>
          <h4 className="title">{direction.title}</h4>
        </div>
        <div className="direction_direction">
          {direction.contents.map((content, i) => (
            <div key={nanoid()} className="direction_direction_item">
              <h4>{content}</h4>
            </div>
          ))}
        </div>
      </div>
      <div>
        <nav>
          <ul className="sprint_start_nav">
            {navbar.map((nav) => (
              <li
                key={nav.id}
                className={`sprint_start_nav_item ${
                  currentNav === nav.id ? "sprint_start_nav_item_active" : ""
                }`}
                id={nav.id}
                onClick={handleClickNav}
              >
                <h3 id={nav.id}>{nav.ch_title}</h3>
                <h4 id={nav.id}>{nav.eg_title}</h4>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="sprint_start_content">
          {currentNavContent.map((content) => (
            <li key={nanoid()}>
              <h3>{content}</h3>
            </li>
          ))}
          {currentNav === "retrospective" && (
            <li className="confluence">
              <h3>推薦工具：<span></span></h3>
            </li>
          )}
        </ul>
      </div>
      <BacklogFooter
        last={"/sprint_backlog_list"}
        next={"/sprint_list"}
        btnTxt={"我瞭解了"}
      />
    </div>
  );
}

export default SpritStart;
