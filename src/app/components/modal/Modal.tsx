'use client';

import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function Modal({
  children,
  isOpen,
  onClose,
  className,
}: ModalProps) {
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      modalContentRef.current?.querySelector('input')?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-[#505050]/60 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        ref={modalContentRef}
        className={`
          max-h-[calc(100vh-40px)] max-w-[calc(100vw-20px)]
          overflow-auto animate-modalIn z-50
          ${className}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    typeof window !== 'undefined' ? document.body : (null as any)
  );
}
