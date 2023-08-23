import { ReactNode } from "react";
import { createPortal } from 'react-dom';

import classes from './modal.module.css';

const Backdrop = ({ onClose } : { onClose: () => void }) => {
    
    return <div className={classes.backdrop} onClick={onClose}/>;
};

const ModalOverlay = ( { children } : { children : ReactNode }) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
      </div>
    );
};

const portalElement: any = document.getElementById('overlays');

const Modal = ({
    children,
    onClose
  }: {
    children: ReactNode,
    onClose: () => void
  }) => {
    return(
        <>
            {createPortal(<Backdrop onClose={onClose} />, portalElement)}
            {createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
}

export default Modal;