import BacklogFooter from "../../../components/Backlog/BacklogFooter";
import { direction, footerCss } from "../../../utils/SprintBacklogData";
import { nanoid } from "nanoid";
function SprintBacklogStart() {
  return (
    <div className="container view90_center_mb48">
      <ul>
        {direction.map((character) => (
          <li
            key={character.id}
            className={`direction direction_${character.id}`}
          >
            <div className="direction_character">
              <div
                className={`direction_character_image ${character.id}_image`}
              ></div>
              <h4 className="title">{character.title}</h4>
            </div>
            <div className="direction_direction">
              {character.contents.map((content) => (
                <div key={nanoid()} className="direction_direction_item">
                  <h4>{content}</h4>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <BacklogFooter
        last={"/product_backlog_list"}
        next={"/sprint_backlog_list"}
        btnTxt={"沒問題，我來挑戰！"}
        css={footerCss}
      />
    </div>
  );
}

export default SprintBacklogStart;
