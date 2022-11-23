import Description from "../../components/Description/Description";
import BacklogFooter from "../../components/Backlog/BacklogFooter";
import Modal from "../../components/Modal/Modal";
import RD from "../../style/image/character/RD.png";
import {
  retro_description,
  retros,
  retro_correct_ID,
} from "../../utils/data/RetroData";
import useModal from "../../hooks/UseModal";
import { useState, useRef } from "react";

function Retro() {
  const [done, setDone] = useState([{}, {}]);
  const modalRef = useRef();
  const { modalText, modalBtnText, doneID, handleClickFinish } = useModal(
    modalRef,
    done,
    retro_correct_ID
  );
  const handleClickRetro = (e) => {
    const { id } = e.target;
    const final = [...done];
    console.log(id);
    if (id === "help" || id === "cover") {
      final[0] = { id: id };
    } else {
      final[1] = { id: id };
    }
    setDone(final);
  };
  return (
    <>
      <div className="container view90_center_mb48 retro">
        <Description character={retro_description} />
        <div className="retro_body">
          {retros.map((retro) => (
            <div className="retro_item" key={retro.id}>
              <h2 className="retro_title">{retro.title}</h2>
              <ul className="retro_content">
                {retro.retro.map((item) => (
                  <li
                    className={doneID.includes(item.id) ? "retro_active" : ""}
                    key={item.id}
                    id={item.id}
                    onClick={handleClickRetro}
                  >
                    <div className="arrow" id={item.id}></div>
                    <h3 className="content" id={item.id}>
                      {item.content}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <BacklogFooter
          last={"/sprint_list"}
          btnTxt={"我想我了解了！"}
          handleClickOpenModal={handleClickFinish}
        />
      </div>
      <Modal
        ref={modalRef}
        character={RD}
        text={modalText}
        btn_text={modalBtnText}
      />
    </>
  );
}

export default Retro;
