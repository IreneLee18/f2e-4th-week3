import { useNavigate, useLocation } from "react-router-dom";
import { useState, forwardRef, useImperativeHandle } from "react";
function Modal({ character, text, btn_text }, ref) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [modalState, setModalState] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));
  const handleCloseModal = () => {
    if (pathname.includes("product_backlog_list")) {
      if (btn_text === "返回挑戰" || btn_text === "再試試看") {
        setModalState(false);
      } else {
        setModalState(false);
        navigate("/sprint_backlog");
      }
    }

    if (pathname.includes("sprint_backlog_list")) setModalState(false);

    if (pathname.includes("sprint_list")) {
      if (btn_text === "返回挑戰" || btn_text === "再試試看") {
        setModalState(false);
      } else {
        setModalState(false);
        navigate("/retro");
      }
    }

    if (pathname.includes("retro")) {
      if (btn_text === "返回挑戰" || btn_text === "再試試看") {
        setModalState(false);
      } else {
        setModalState(false);
        navigate("/finish");
      }
    }
  };

  return (
    <>
      {modalState && (
        <div className="modal">
          <div className="modal_body">
            <div
              className="character"
              style={{ backgroundImage: `url(${character})` }}
            ></div>
            <div className="text">
              {text.map((item, i) => (
                <h3 key={i}>{item}</h3>
              ))}
            </div>
            <div>
              <button onClick={handleCloseModal}>{btn_text}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default forwardRef(Modal);
