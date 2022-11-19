import { useState, useRef,useEffect } from "react";
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
  console.log(pathname);
  const [progressBar, setProgress] = useState(initProgressBar);
  const newProgress = useRef([...progressBar])
  useEffect(() => {
    switch (pathname) {
      case "/":
        setProgress(initProgressBar);
        break;
      case "/roles":
        newProgress.current.splice(0, 0, doing);
        setProgress(newProgress.current);
        break;
      default:
        new Error("error");
    }
  }, [newProgress, pathname]);

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
