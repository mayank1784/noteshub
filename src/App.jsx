import { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

function App() {
  // Initialize the state with notes from local storage or an empty array if no notes are found
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  // Function to add a new note
  const addNote = (note) => {
    // Create a new array with the existing notes and the new note
    const updatedNotes = [...notes, note];
    // Update the state with the new array
    setNotes(updatedNotes);
    // Save the new array to local storage
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  // Function to delete a note
  const deleteNote = (id) => {
    confirm("Delete Note?")
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };


  // Function to update an existing note
  const updateNote = (updatedNote) => {
    // Create a new array where the note with the same id is replaced with the updated note
    const updatedNotes = notes.map(note => note.id === updatedNote.id ? updatedNote : note);
    // Update the state with the new array
    setNotes(updatedNotes);
    // Save the new array to local storage
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="container mx-auto p-4">
      {/* App title */}
      <h1 className="text-2xl font-bold mb-10 text-center items-center">Notes Hub</h1>
      {/* Centered NoteForm component for adding new notes */}
      <div className='flex items-center justify-center'>
      <NoteForm addNote={addNote} />
      </div>
       {/* NoteList component for displaying notes */}
      <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
}

export default App;
