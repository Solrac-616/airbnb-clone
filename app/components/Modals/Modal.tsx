'use client';

import { useCallback, useEffect, useState } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disable?: boolean;
  secondaryAction: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = 
({ isOpen, onClose, onSubmit, title, body, footer, actionLabel, disable, secondaryAction, secondaryLabel }) => {

  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disable) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300)
  }, [disable, onClose]);

  const handleSubmit = useCallback(() => {
    if (disable) {
      return;
    }

    onSubmit();
  }, [disable, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disable) {
      return;
    }

    secondaryAction();
  },[disable, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return ( 
    <>
      <div>
        
      </div>
    </>
  );
}
 
export default Modal;