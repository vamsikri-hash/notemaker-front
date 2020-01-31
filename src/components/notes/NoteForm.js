import React, { useState, useEffect, useContext } from "react";
import NoteContext from "../../context/note/noteContext";

const NoteForm = () => {
  const noteContext = useContext(NoteContext);
  const { AddNote, UpdateNote, clearCurrent, current, error } = noteContext;

  useEffect(() => {
    if (current !== null) {
      setNote(current);
    } else {
      setNote({ title: "" });
    }
  }, [error, noteContext, current]);
  const [note, setNote] = useState({ title: "" });
  const { title } = note;
  const onChange = e => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("entering submit");
    console.log(note);
    if (current === null) {
      AddNote(note);
    } else {
      UpdateNote(note);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <div className='form-container'>
      <h1>Create Note</h1>

      <form onSubmit={onSubmit}>
        <div className='form-group x-large'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' value={title} onChange={onChange} />
        </div>

        <input
          type='submit'
          value={current ? "Update Note" : "Add Note"}
          className='btn  btn-dark'
        />
        {current && (
          <div className='m-2'>
            <button className='btn btn-light btn-block' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default NoteForm;
