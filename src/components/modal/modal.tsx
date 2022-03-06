import React from "react";
import { useEffect } from "react";
import { Cancel } from "@styled-icons/material-sharp";
import ReactPortal from "../react-portal/react-portal";
import * as Styles from "./modal.styled";

interface IProps {
  isOpen: boolean;
  modalId: string;
  handleClose: () => void;
}

const Modal: React.FC<IProps> = ({
  children,
  isOpen,
  modalId,
  handleClose,
}) => {
  useEffect(() => {
    const closeOnEscapeKey = (event: KeyboardEvent) =>
      event.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId={modalId}>
      <Styles.Container>
        <div className="modal-content">
          <Cancel
            height={24}
            onClick={(event) => {
              event.stopPropagation();
              handleClose();
            }}
            className="close-button"
          />
          {children}
        </div>
      </Styles.Container>
    </ReactPortal>
  );
};

export default Modal;
