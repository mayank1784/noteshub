import Modal from './Modal';
import { useState } from 'react';

function Note({ note, deleteNote, updateNote }) {
  // State for managing modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for managing note title and content
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  // Function to handle note deletion
  const handleDeleteClick = () => deleteNote(note.id);
  // Function to handle opening the edit modal
  const handleEditClick = () => setIsModalOpen(true);
  
  // Function to handle saving the updated note
  const handleSaveClick = () => {
    // Update the note with new title and content, and current timestamp
    updateNote({ ...note, title, content, timestamp: Date.now() });
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div className="border border-teal-300 p-4 mb-4 rounded shadow">
      {/* Display note title */}
      <h2 className="text-xl font-bold">{note.title}</h2>
      {/* Display note content */}
      <p>{note.content}</p>
      {/* Display note timestamp */}
      <p className="text-sm text-gray-500">{new Date(note.timestamp).toLocaleString()}</p>
      {/* Edit button to open the modal */}
      <button className="text-blue-500 mr-2" onClick={handleEditClick}>Edit</button>
      {/* Delete button to delete the note */}
      <button className="text-red-500" onClick={handleDeleteClick}>Delete</button>
      
      {/* Modal for editing the note */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Edit Note</h2>
        {/* Input field for editing note title */}
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        {/* Textarea for editing note content */}
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        {/* Buttons for canceling or saving the edit */}
        <div className="flex justify-end">
          <button className="bg-gray-300 text-black p-2 rounded mr-2" onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSaveClick}>Save</button>
        </div>
      </Modal>
    </div>
  );
}

export default Note;
