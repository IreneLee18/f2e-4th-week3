import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import undone from "../style/image/progress/progress_bar_undone.png";
import done from "../style/image/progress/progress_bar_done.png";
import doing from "../style/image/progress/progress_bar_doing.png";
const initProgressBar = [
  undone,
  undone,
  undone,
  undone,
  undone,
  undone,
  undone,
  undone,
  undone,
];
function Header() {
  const { pathname } = useLocation();
  const [progressBar, setProgress] = useState(initProgressBar);
  useEffect(() => {
    switch (pathname) {
      case "/":
        setProgress(initProgressBar);
        break;
      case "/roles":
        setProgress([
          doing,
          undone,
          undone,
          undone,
          undone,
          undone,
          undone,
          undone,
          undone,
        ]);
        break;
      case "/product_backlog":
        setProgress([
          done,
          doing,
          undone,
          undone,
          undone,
          undone,
          undone,
          undone,
          undone,
        ]);
        break;
      case "/product_backlog_list":
        setProgress([
          done,
          done,
          doing,
          undone,
          undone,
          undone,
          undone,
          undone,
          undone,
        ]);
        break;
      case "/sprint_backlog":
        setProgress([
          done,
          done,
          done,
          doing,
          undone,
          undone,
          undone,
          undone,
          undone,
        ]);
        break;
      case "/sprint_backlog_list":
        setProgress([
          done,
          done,
          done,
          done,
          doing,
          undone,
          undone,
          undone,
          undone,
        ]);
        break;
      case "/sprint":
        setProgress([
          done,
          done,
          done,
          done,
          done,
          doing,
          undone,
          undone,
          undone,
        ]);
        break;
      case "/sprint_list":
        setProgress([
          done,
          done,
          done,
          done,
          done,
          done,
          doing,
          undone,
          undone,
        ]);
        break;
      case "/retro":
        setProgress([
          done,
          done,
          done,
          done,
          done,
          done,
          done,
          doing,
          undone,
        ]);
        break;
      case "/finish":
        setProgress([done, done, done, done, done, done, done, done, done]);
        break;
      default:
        new Error("error");
    }
  }, [pathname]);

  return (
    <header>
      <ul>
        {progressBar.map((item, i) => (
          <li
            className="progress_bar"
            key={i}
            style={{ backgroundImage: `url(${item})` }}
          ></li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
