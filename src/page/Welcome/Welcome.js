import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
const footer5 = [...Array(5).keys()];
function Welcome({ isLoading }) {
  const navigate = useNavigate();
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
              <div className="welcome_content_txt">
                <div className="type">
                  <h4>哈囉，歡迎加入 TT 資訊！</h4>
                </div>
                <div className="type">
                  <h4>
                    在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！
                  </h4>
                </div>
                <div className="type">
                  <h4>請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～</h4>
                </div>
              </div>
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
