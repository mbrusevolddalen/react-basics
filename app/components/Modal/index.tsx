import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ children, isOpen, onClose }: ModalProps) {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.body;
    const el = elRef.current;

    if (!modalRoot || !el) {
      return () => {}; // Return an empty cleanup function when modalRoot or el is undefined
    }

    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  const content = (
    <div>
      <button type="button" onClick={onClose}>Close</button>
      {children}
    </div>
  );

  return isOpen ? ReactDOM.createPortal(content, elRef.current) : null;
}

export default Modal;
