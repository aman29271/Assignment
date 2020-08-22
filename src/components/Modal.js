import React from "react";
import styled from "styled-components";
import bulma from "../scss/bulma.module.scss";

const Modal = ({ children, isActive, setModal }) => {
  return (
    <div className={`${bulma.modal} ${isActive ? bulma["is-active"] : ""}`}>
      <ModalBackground className={bulma["modal-background"]}></ModalBackground>
      <div className={bulma["modal-content"]}>
          <div className={bulma['box']}>
          {children}
          </div>
      </div>
      <button
        className={`${bulma["modal-close"]} ${bulma["is-large"]}`}
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
