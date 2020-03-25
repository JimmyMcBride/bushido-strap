import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Card, Box, theme } from "../../../index";

const Modal = ({ isActive, toggle, children }) =>
  isActive
    ? ReactDOM.createPortal(
        <ModalWrapper jc_center>
          <Box className="container" aria-modal aria-hidden role="dialog">
            <div className="overlay" onClick={toggle} />
            <Card className="modal">{children}</Card>
          </Box>
        </ModalWrapper>,
        document.body
      )
    : null;

const ModalWrapper = styled.div`
  text-align: center;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    // z-index: 1060;
    width: 100%;
    height: 100%;
    background-color: ${theme.blackAlpha8};
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal {
    z-index: 2000;
    background: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 500px;
    padding: 2rem;
  }
`;

export default Modal;
