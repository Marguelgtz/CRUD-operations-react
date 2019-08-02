import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import NoteContainer from "./components/notesContainer";

function App() {
  const [notes, setNotes] = useState([]);

  console.log("notes state", notes);

  const fetchNotes = () => {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => setNotes(res.data))
      .catch(err => console.log(err));
  };

  const handleSubmit = note => {
    axios
      .post("https://fe-notes.herokuapp.com/note/create", note)
      .then(res => fetchNotes())
      .catch(err => console.log(err));
  };

  const handleUpdate = (note, id) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
      .then(res => fetchNotes())
      .catch(err => console.log(err));
  };

  const handleDelete = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => fetchNotes())
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div className="App">
      <NoteContainer
        notes={notes}
        addNote={handleSubmit}
        updateNote={handleUpdate}
        deleteNote={handleDelete}
      />
    </div>
  );
}

export default App;
