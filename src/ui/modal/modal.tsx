import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Backdrop = ({ onHideModal }: { onHideModal: () => void }) => {
  return <div className="bg-black/[.50] w-full h-full absolute z-0" onClick={onHideModal} />;
};

const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return (
    <>
        <div className='relative w-full h-full flex'>
            <div className="relative z-10 bg-white right-0 w-full max-w-2xl">
                <div className="">{children}</div>
            </div>
        </div>
    </>
  );
};

const Modal = ({ children, onHideModal }: { children: ReactNode, onHideModal: () => void}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const portalElement = isBrowser ? document.getElementById('overlays') : null;

  if (!portalElement) return null;

  return (
    <>
        {createPortal(<Backdrop onHideModal={onHideModal} />, portalElement) }
        {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;