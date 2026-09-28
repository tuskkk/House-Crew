import type { ReactNode } from "react";
import { X } from "lucide-react";

type ModalProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ title, onClose, children }: ModalProps) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2 py-6 md:px-4"
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        className="relative w-full max-w-lg rounded bg-white px-2 py-6 shadow-md md:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-4 rounded p-1 text-text-secondary transition-colors hover:bg-disabled/30 hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary md:right-4"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        <h2
          id="modal-title"
          className="pr-6 text-xl font-semibold text-text-primary md:pr-8"
        >
          {title}
        </h2>
        <div className="mt-4 text-text-secondary">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
