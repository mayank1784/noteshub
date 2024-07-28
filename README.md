# Notes Hub

## Overview

Notes Hub is a simple note-taking application built with React and Tailwind CSS, using Vite as the build tool. The app allows users to create, read, update, and delete notes. It also supports searching through notes, pagination for managing large numbers of notes, and local storage for data persistence.

## Features

- **Create Notes**: Add new notes with a title and content.
- **Read Notes**: View all notes with pagination (10 notes per page).
- **Update Notes**: Edit existing notes using a modal form.
- **Delete Notes**: Delete notes permanently.
- **Search Notes**: Search through notes by title or content.
- **Timestamps**: View the creation or last modification time for each note.

## Setup and Running Instructions

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/note-taking-app.git
    cd note-taking-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    # or
    yarn install
    ```

3. **Run the development server**:
    ```sh
    npm run dev
    # or
    yarn dev
    ```

4. **Open the app in your browser**:
    ```sh
    http://localhost:5173
    ```

### Build for Production

To create a production build of the app, run:
```sh
npm run build
# or
yarn build
```
The output will be in the `dist` directory.

## Project Structure

- **src/**: Contains the source code.
  - **components/**: Contains the React components used in the app.
    - `Note.jsx`: Component for displaying individual notes.
    - `NoteForm.jsx`: Component for adding a new note.
    - `NoteList.jsx`: Component for listing notes with pagination and search.
    - `Modal.jsx`: Component for displaying modals.
  - `App.jsx`: Main component that sets up the app and handles state management.
  - `index.css`: Tailwind CSS styles.
  - `main.jsx`: Entry point for the React app.

## Detailed Explanation of Components

### `App.jsx`

The main component of the app, responsible for managing the state of the notes and rendering `NoteForm` and `NoteList` components.

### `NoteForm.jsx`

A form component for adding new notes. It uses local state to manage the title and content of the note being added.

### `NoteList.jsx`

A component that displays a list of notes with pagination and search functionality. It manages the current page and search term using local state.

### `Note.jsx`

A component for displaying individual notes. It includes buttons for editing and deleting the note.

### `Modal.jsx`

A reusable modal component for editing notes. It takes `isOpen`, `onClose`, and `children` as props to manage its visibility and content.

## Usage

### Add a Note:

- Enter a title and content in the input fields.
- Click "Add Note" to save the note.

### Search Notes:

- Use the search input to filter notes by title or content.

### Edit a Note:

- Click the "Edit" button on a note to open the edit modal.
- Modify the title or content and click "Save" to update the note.

### Delete a Note:

- Click the "Delete" button on a note and confirm the deletion to remove the note.

### Pagination:

- Use the pagination buttons at the bottom to navigate through pages of notes.
