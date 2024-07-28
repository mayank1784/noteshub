import { useState } from 'react';
import Note from './Note';

function NoteList({ notes, deleteNote, updateNote }) {
  // State variables for managing current page and search term
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Number of notes to display per page
  const notesPerPage = 10;
  // Calculate the indexes for slicing the notes array
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;

  // Filter and slice the notes based on search term and current page
  const currentNotes = notes
    .filter(note => 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstNote, indexOfLastNote);

  // Handle search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Calculate total pages needed for pagination
  const totalPages = Math.ceil(notes.length / notesPerPage);

  // Set the current page when a pagination button is clicked
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Search input field */}
      <input 
        type="text" 
        placeholder="Search notes..." 
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded m-12"
      />
      {/* Display notes in a responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-12">
        {currentNotes.map(note => (
          <Note key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote} />
        ))}
      </div>
      {/* Pagination buttons */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index} 
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
