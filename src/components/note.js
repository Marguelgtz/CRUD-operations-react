import React, { useState } from "react";

const Note = props => {
  console.log("note info", props);
  const { title, textBody, _id } = props.note;

  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState({
    title: title,
    textBody: textBody
  });

  const handleInput = e => {
    setEditInput({ ...editInput, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleUpdate = () => {
    props.updateNote(editInput, _id);
    toggleEdit();
  };

  const handleDelete = () => {
    props.deleteNote(_id);
  };

  if (isEditing) {
    //Display form
    return (
      <div>
        <form onSubmit={handleUpdate}>
          <h2>Edit note</h2>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={editInput.title}
            onChange={handleInput}
          />
          <label htmlFor="Text Body">Text Body</label>
          <input
            type="text"
            name="textBody"
            value={editInput.textBody}
            onChange={handleInput}
          />
          <button>Update note</button>
        </form>
        <button onClick={toggleEdit}>back</button>
      </div>
    );
  } else {
    return (
      <div>
        <h3>{title}</h3>
        <p>{textBody}</p>
        <button onClick={toggleEdit}>Edit Note</button>
        <button onClick={handleDelete}>Delete Note</button>
      </div>
    );
  }
};

export default Note;
