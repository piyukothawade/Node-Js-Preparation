import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const API = "https://frontendintegration-t8hs.onrender.com";
  const [notes, setNotes] = useState([]);

  function fetchNotes() {
    axios
      .get(`${API}/api/notes`)
      .then((res) => {
        setNotes(res.data.notes || []);
      })
      .catch((err) => {
        console.error(err);
        setNotes([]);
      });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;

    axios
      .post(`${API}/api/notes`, {
        title: title.value,
        description: description.value,
      })
      .then(() => fetchNotes());
      e.target.reset();
  }

  function handleDeleteNote(noteId) {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    axios.delete(`${API}/api/notes/${noteId}`).then(() => fetchNotes());
  }

  function handleEditNote(noteId) {
    const newDescription = prompt("Enter new description");
    if (!newDescription) return;

    axios
      .patch(`${API}/api/notes/${noteId}`, {
        description: newDescription,
      })
      .then(() => fetchNotes());
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter Title" />
        <input name="description" type="text" placeholder="Enter Description" />
        <button>Add Note</button>
      </form>

      <div className="notes">
        {Array.isArray(notes) &&
          notes.map((note) => (
            <div className="note" key={note._id}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>

              <button onClick={() => handleDeleteNote(note._id)}>
                Delete
              </button>
              <button onClick={() => handleEditNote(note._id)}>
                Edit
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default App;
