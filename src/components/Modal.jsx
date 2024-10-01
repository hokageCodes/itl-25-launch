/* eslint-disable react/prop-types */

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 overflow-y-auto max-h-[80vh]">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
