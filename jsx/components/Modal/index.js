import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Card, Box, theme } from "../../../index";

const Modal = ({ isActive, toggle, children }) =>
  isActive
    ? ReactDOM.createPortal(
        <ModalWrapper jc_center>
          <div className="overlay" />
          <Box
            className="container"
            aria-modal
            aria-hidden
            role="dialog"
            onClick={toggle}
          >
            <Card className="modal">
              <Box className="header">
                {/* <Button
                  className="close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  autoFocus
                  p="0.5rem"
                  onClick={toggle}
                >
                  <Box sqr="1.2rem" bg={theme.gray9} close />
                </Button> */}
              </Box>
              {children}
            </Card>
          </Box>
        </ModalWrapper>,
        document.body
      )
    : null;

const ModalWrapper = styled.div`
  text-align: center;
  padding-top: 2rem;
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
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
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal {
    z-index: 100;
    background: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 500px;
    padding: 2rem;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .close-button {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    background: ${theme.gray2};
    cursor: pointer;
    border: none;
  }
`;

export default Modal;
