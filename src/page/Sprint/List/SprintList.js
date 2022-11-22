import Description from "../../../components/Description/Description";
import BacklogFooter from "../../../components/Backlog/BacklogFooter";
import { description_list } from "../../../utils/SprintData";
function SprintList() {
  return (
    <>
      <div className="container view90_center_mb48 sprint_list">
        <Description character={description_list} />
        <div className="sprint_list_body">
          <div className="sprint_list_done"></div>
          <div className="sprint_list_undone"></div>
        </div>
        <BacklogFooter
          last={"/sprint"}
          next={"/retro"}
          btnTxt={"完成了～"}
        />
      </div>
    </>
  );
}

export default SprintList;
