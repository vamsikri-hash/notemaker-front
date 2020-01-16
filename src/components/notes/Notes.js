import React, { Fragment, useEffect, useContext } from "react";
import NoteContext from "../../context/note/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes, GetNotes } = noteContext;
  useEffect(() => {
    GetNotes();
    //eslint-disable-next-line
  }, []);
  if (notes !== null && notes.length === 0) {
    return <h2>Please, Add a Note</h2>;
  }
  return (
    <Fragment>
      {notes !== null ? (
        notes.map(noteitem => (
          <NoteItem key={noteitem.id} noteitem={noteitem} />
        ))
      ) : (
        <h2>nothing</h2>
      )}
    </Fragment>
  );
};

export default Notes;
