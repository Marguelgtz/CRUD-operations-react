import React, { useState } from "react";
import Note from "./note";

const NoteContainer = props => {
  console.log("container props", props);

  const [input, setInput] = useState({
    title: "",
    textBody: ""
  });

  const handleInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addNote(input);
    setInput({
      title: "",
      textBody: ""
    });
  };

  return (
    <div>
      <h1>Note container</h1>
      <form onSubmit={handleSubmit}>
        <h2>add a new note</h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={input.title}
          onChange={handleInput}
        />
        <label htmlFor="Text Body">Text Body</label>
        <input
          type="text"
          name="textBody"
          value={input.textBody}
          onChange={handleInput}
        />
        <button>add note</button>
      </form>
      {props.notes.map((note, i) => (
        <Note
          note={note}
          key={i}
          updateNote={props.updateNote}
          deleteNote={props.deleteNote}
        />
      ))}
    </div>
  );
};

export default NoteContainer;
