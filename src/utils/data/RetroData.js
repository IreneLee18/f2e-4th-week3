export const retro_description = {
  id: "rd",
  title: "",
  contents: [
    [
      "哇新來的，你真的很幸運，今天剛好是開發 B 組的 Retro，你也來見識一下，看看 Retro 都該做些什麼吧～～",
      "我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄在 Confluence 中。",
    ],
    ["重點在於『正面表述』，你也思考看看，哪一些是適合 Retro 的回饋吧～～"],
  ],
};

export const retros = [
  {
    title: "做得好的地方",
    id: "left",
    retro: [
      {
        id: "help",
        content: "這次我幫了很多人救火耶。",
      },
      {
        id: "cover",
        content: "大家在開發上都會互相 cover，讓任務準時在時間內完成。",
      },
    ],
  },
  {
    title: "有哪些可以做得更好？",
    id: "right",
    retro: [
      {
        id: "record",
        content: "可以記錄這次的開發時間，讓預估團隊點數可以更精準。",
      },
      {
        id: "delay",
        content: "開發時間預估不準確，請後端下次改進，避免 delay 到我。",
      },
    ],
  },
];

export const retro_correct_ID = "cover_record";
export const retro_correct = [{ id: "cover" }, { id: "record" }];
