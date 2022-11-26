import Loading from "../../components/Loading/Loading";
import GSAP from "../../utils/GSAP";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
const footer5 = [...Array(5).keys()];
const text =
  "哈囉，歡迎加入 TT 資訊！<br/><br/> 在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！<br/><br/>請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～";
function Welcome({ isLoading }) {
  const navigate = useNavigate();
  const welcome_content_txt = useRef();
  useEffect(() => {
    if (welcome_content_txt.current) {
      GSAP(".welcome_content_txt", text);
    }
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container welcome_page">
          <div className="welcome_title">
            <div className="shine_l"></div>
            <h1> </h1>
            <div className="shine_r"></div>
          </div>
          <div className="welcome_content">
            <div className="welcome_content_icon"></div>
            <div className="welcome_content_body">
              <h4
                className="welcome_content_txt"
                ref={welcome_content_txt}
              ></h4>
            </div>
            <div className="welcome_content_btn">
              <button onClick={() => navigate("/roles")}>接受挑戰</button>
            </div>
          </div>
          <ul className="welcome_footer">
            {footer5.map((item) => (
              <li key={item}></li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Welcome;
