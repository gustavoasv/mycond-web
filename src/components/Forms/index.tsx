import { useState } from "react";
import Modal from "react-modal";
import * as C from "./style";

interface PageType {
  namePage: string;
  nameButton?: string;
}

export const StyleModal = {
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    width: "500px",
    margin: "0 auto",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
  },
  overlay: {
    backgroundColor: "#f5f5f54e",
  },
};
Modal.setAppElement("#root");
export const Form = (Props: PageType) => {
  const [modalsOpen, setIsOpen] = useState<boolean>(false);
  const [TypeOfModal, setTypeOfModal] = useState<string>("");

  const handleOpenTypeModal = () => {
    setTypeOfModal(`Editar ${Props.namePage}`);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setTypeOfModal("");
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setTypeOfModal(`Novo ${Props.namePage}`);
    setIsOpen(true);
  };

  const handleOpeTypeDelnModal = () => {
    setTypeOfModal(`Deletar ${Props.namePage}`);
    setIsOpen(true);
  };

  return (
    <C.MainForm>
      <div>
        <h2>{`MURAL DE ${Props.namePage.toLocaleUpperCase()}`}</h2>
        <button onClick={handleOpenModal} className="buttomModal">
          {Props.nameButton}
        </button>
        <hr></hr>
        <Modal
          isOpen={modalsOpen}
          style={{
            content: {
              position: "absolute",
              top: "40px",
              left: "40px",
              height: '300px',
              width: "500px",
              display: 'flex',
              flexDirection: 'column',
              margin: "0 auto",
              right: "40px",
              bottom: "40px",
              border: "1px solid #ccc",
              background: "#fff",
            },
            overlay: {
              backgroundColor: "#f5f5f54e",
            },
          }}
        >
          {TypeOfModal && <h1>{TypeOfModal}</h1>}
          <label>Titulo do aviso</label>
          <C.InputModal placeholder="Digite um titulo"></C.InputModal>
          <label>Corpo do aviso</label>
          <input type="text" />
          <button onClick={handleCloseModal}>Fechar modal</button>
        </Modal>
        <C.TableMain>
          <thead>
            <tr>
              <C.TableHead>Titulo</C.TableHead>
              <C.TableHead>Data de Criação</C.TableHead>
              <C.TableHead>Ações</C.TableHead>
            </tr>
          </thead>
          <tbody>
            <tr>
              <C.TableBody>Titulo de teste</C.TableBody>
              <C.TableBody>05/03/2022</C.TableBody>
              <C.TableBody>
                <button onClick={handleOpenTypeModal} className="excluirButton">
                  Excluir
                </button>
                <button onClick={handleOpeTypeDelnModal} className="editButton">
                  Editar
                </button>
              </C.TableBody>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
          </tbody>
        </C.TableMain>
      </div>
    </C.MainForm>
  );
};
