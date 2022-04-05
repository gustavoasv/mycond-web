import { useState } from "react";
import { Buttons } from "../ButtonsForm";
import Modal from 'react-modal'
import * as C from "./style";
import ReactModal from "react-modal";

interface PageType {
  namePage: string;
  nameButton?: string | undefined
}

export const Form = (Props: PageType) => {
  const customStyle = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      }
  }
  const [modalsOpen, setIsOpen] = useState<boolean>(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <C.MainForm>
      <div>
        <h1>Mural de {Props.namePage}</h1>
        <hr></hr>
        <button onClick={handleOpenModal}>{Props.nameButton}</button>
        <Modal isOpen={modalsOpen}>
          <h1>Mural de {Props.namePage}</h1>
          <button onClick={handleCloseModal}>Fechar modal</button>
        </Modal>
      </div>
    </C.MainForm>
  );
};
