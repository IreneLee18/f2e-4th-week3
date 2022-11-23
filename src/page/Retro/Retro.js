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
  const [done, setDone] = useState([]);
  const modalRef = useRef();
  const { modalText, modalBtnText, handleClickFinish } = useModal(
    modalRef,
    done,
    retro_correct_ID
  );
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
                  <li key={item.id}>
                    <span></span>
                    <h3>{item.content}</h3>
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
