import React, { useContext } from "react";
import PropTypes from "prop-types";
import NoteContext from "../../context/note/noteContext";

const NoteItem = ({ noteitem }) => {
  const noteContext = useContext(NoteContext);
  const { DeleteNote, setCurrent, clearCurrent } = noteContext;

  const { id, title } = noteitem;

  const onDelete = () => {
    DeleteNote(id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      {title && <h3 className='text-primary'>{title}</h3>}
      <p className='m-1'>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(noteitem)}
        >
          Edit
        </button>
      </p>
      <p className='m-1'>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

NoteItem.propTypes = {
  noteitem: PropTypes.object.isRequired
};
export default NoteItem;
