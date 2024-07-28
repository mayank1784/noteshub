import { useState } from 'react';

function NoteForm({ addNote }) {
  // State variables to manage the input values for the note title and content
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Create a new note object with a unique id and current timestamp
    const newNote = {
      id: Date.now(),
      title,
      content,
      timestamp: Date.now()
    };
    // Call the addNote function passed via props to add the new note
    addNote(newNote);
    // Clear the input fields after adding the note
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {/* Input field for the note title */}
      <input 
        type="text" 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      {/* Textarea for the note content */}
      <textarea 
        placeholder="Content" 
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      {/* Submit button to add the note */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Add Note</button>
    </form>
  );
}

export default NoteForm;
    