import Description from "../../../components/Description/Description";
import BacklogFooter from "../../../components/Backlog/BacklogFooter";
import { direction, footerCss } from "../../../utils/data/SprintBacklogData";

function SprintBacklogStart() {
  return (
    <div className="container view90_center_mb48">
      <div>
        {direction.map((character) => (
          <Description key={character.id} character={character} />
        ))}
      </div>
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
