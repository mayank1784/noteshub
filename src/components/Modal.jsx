function Modal({ isOpen, onClose, children }) {
    // If the modal is not open, return null and render nothing
    if (!isOpen) return null;
  
    return (
      // Overlay for the modal with a semi-transparent background
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        {/* Modal container with padding, rounded corners, and shadow */}
        <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
          {/* Render the children passed to the modal component */}
          {children}
        </div>
      </div>
    );
  }
  
  export default Modal;
  