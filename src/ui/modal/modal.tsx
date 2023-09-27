import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';

const Backdrop = ({ onHideModal }: { onHideModal: () => void }) => {
  return <div className={styles.backdrop} onClick={onHideModal} />;
};

const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const Modal = ({ children, onHideModal }: { children: ReactNode; onHideModal: () => void }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const portalElement = isBrowser ? document.getElementById('overlays') : null;

  if (!portalElement) return null;

  return (
    <>
      { createPortal(<Backdrop onHideModal={onHideModal} />, portalElement) as ReactNode }
      { createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement) as ReactNode }
    </>
  );
};

export default Modal;
