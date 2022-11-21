import BacklogFooter from "../../../components/Backlog/BacklogFooter";
import { footerCss } from "../../../utils/SprintBacklogData";
function SprintBacklogStart() {
  return (
    <div className="container sprint_backlog_start">
      <ul>
        <li className="sprint_backlog_start_character po">
          <div className="character">
            <div className="sprint_backlog_start_character_image po_image"></div>
            <h4 className="title">產品負責人</h4>
          </div>
          <div className="content">
            <h4>
              產品待辦清單好了之後，我們來召集 Scrum Master
              和開發團隊共同召開短衝規劃會議（Sprint
              Planning）。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint
              Backlog），並由開發團隊在接下來的產品開發週期裡執行。
            </h4>
          </div>
        </li>
        <li className="sprint_backlog_start_character sm">
          <div className="character">
            <div className="sprint_backlog_start_character_image sm_image"></div>
            <h4 className="title">敏捷教練</h4>
          </div>
          <div className="content">
            <h4>
              嗨嗨(ﾟ∀ﾟ)你是新來的前端吧！我是這次的 Scrum Master
              山豬，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對
              Scrum 瞭解。這位是黃黃，是我們開發團隊的成員唷～
            </h4>
            <h4>
              目前我們團隊一次 Sprint
              週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數 (Sprint
              Point) 大約是 20 點左右。
            </h4>
          </div>
        </li>
        <li className="sprint_backlog_start_character rd">
          <div className="character">
            <div className="sprint_backlog_start_character_image rd_image"></div>
            <h4 className="title">開發團隊</h4>
          </div>
          <div className="content">
            <h4>
              <span>嘿！新來的，你應該還不知道點數是什麼意思吧！</span>
              <span>
                我來跟你介紹一下吧～ Sprint Point
                目的是為了衡量速度，是用大概花費的時間預估出的相對點數。
              </span>
            </h4>
            <h4>
              <span>
                我這邊已經把剛剛討論好的點數標上去囉～你來練習把任務排到短衝待辦清單吧！
              </span>
              <span>
                對了，我們平常管理任務是使用 Jira
                這套軟體，你有時間記得先去註冊和熟悉唷～
              </span>
            </h4>
          </div>
        </li>
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
