import React from "react";
import styled from "styled-components";

const Modal = ({ children, isActive, setModal }) => {
  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      <ModalBackground className="modal-background"></ModalBackground>
      <div className="modal-content">
        <div className="box">{children}</div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => {
          setModal(false);
        }}
      ></button>
    </div>
  );
};
export default Modal;

const ModalBackground = styled.div`
  //   background-color: none !important;
`;
