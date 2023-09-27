import React, { Fragment } from "react";
import ReactDom, { createPortal } from 'react-dom';

import styles from './modal.module.css';

const Backdrop = (props) => {
    const { onHideCart } = props;
    return <div className={styles.backdrop} onClick={ onHideCart } />
}

const ModalOverlay = (props) => {
    const { children } = props;
    return(
        <div className={styles.modal}>
            <div className={styles.content}>
                { children } 
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    const { children, onHideCart } = props;
    return(
        <>
            {ReactDom.createPortal(<Backdrop onHideCart={onHideCart} />, portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{ children }</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal;