export const description_start = {
  id: "rd",
  title: "開發團隊",
  contents: [
    [
      "等等等等等，你應該還不知道什麼是 Sprint 吧？",
      "讓我先為你介紹一下～ 仔細聽好唷，等等會考考你！",
    ],
    [
      "Sprint 是一個短衝，如同前面敏捷教練所提到的，一次sprint一次sprint週期為2周。開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦每日站立會議（Daily Scrum） ，追蹤成員間的工作狀況。除了每日站立會議，在 Sprint 的結束也會包含 短衝檢視會議（Sprint Review）、短衝自省會議（Sprint Retrospective）。",
    ],
  ],
};
export const description_list = {
  id: "rd",
  title: "開發團隊",
  contents: [
    ["那你來試試看，在這經典的 Scrum 流程圖中，這些流程分別代表哪一個會議呢？"],
    ["請你試著把左下方三個方塊，拖拉至正確的位置上。"],
  ],
};
export const navbar = [
  { id: "daily", eg_title: "Daily Scrum", ch_title: "每日站立會議" },
  { id: "review", eg_title: "Sprint Review", ch_title: "短衝檢視會議" },
  {
    id: "retrospective",
    eg_title: "Sprint Retrospective",
    ch_title: "短衝自省會議",
  },
];

export const daily_content = [
  "每天都要進行的會議，以 15 分鐘為限制",
  "・昨天為團隊的短衝目標（Sprint Goal）做了那些進度",
  "・今天我會如何準備來幫助團隊達到短衝目標",
  "・過程中有遇到什麼問題、難題",
  "透過團隊分享，追蹤大家的工作狀況。",
];

export const review_content = [
  "向利害關係人（Stakeholder）展示工作結果，蒐集使用回饋，分享市場反應，並一起討論下一步工作方向。",
  "在短衝檢視會議過程，會取得使用者或利害關係人對於本次短衝增量的回饋數據或意見，討論哪些想法值得納入至產品待辦清單去實踐。",
];

export const retrospective_content = [
  "團隊在自省會議裡，會共同回顧該短衝歷程發生的事情、好的地方、可以改進的地方。",
  "如何維持我們已有的成功經驗，優化工作流程、讓團隊有變得更好的機會。",
];

export const sprint_list_left = ["產品待辦清單", "短衝規劃", "短衝待辦清單"];
export const sprint_list_undone = [...navbar];
export const sprint_list_done = [{}, {}, {}];
export const sprint_list_correct_ID = "daily_review_retrospective";
