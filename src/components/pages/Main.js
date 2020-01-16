import React from "react";
import NoteForm from "../notes/NoteForm";
import Notes from "../notes/Notes";

const Main = () => {
  return (
    <div className='grid-2'>
      <div>
        <NoteForm />
      </div>
      <div>
        <Notes />
      </div>
    </div>
  );
};

export default Main;
