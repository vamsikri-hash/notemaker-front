import React, { useContext } from "react";
import PropTypes from "prop-types";
import NoteContext from "../../context/note/noteContext";

const NoteItem = ({ noteitem }) => {
  const noteContext = useContext(NoteContext);
  const { DeleteNote, setCurrent, clearCurrent } = noteContext;

  const { id, title, created_at, updated_at } = noteitem;
  const created = new Date(created_at);
  const updated = new Date(updated_at);

  const onDelete = () => {
    //console.log(id);
    localStorage.setItem("noteid", 0);
    DeleteNote(id);
    clearCurrent();
  };

  const showItems = () => {
    localStorage.setItem("noteid", id);
    window.location = "/dashboarditem";
  };

  return (
    <div className='card bg-light'>
      {title && <h3 className='text-primary text-left x-large'>{title}</h3>}
      <ul className='List'>
        {created_at && (
          <li>
            <span className='text-dark'>Created On </span>-
            {created.toDateString()}
          </li>
        )}
        {updated_at && (
          <li>
            <span className='text-dark'>Updated On </span>-{" "}
            {updated.toDateString()}
          </li>
        )}
      </ul>
      <div style={{ display: "flex" }}>
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
        <p className='m-1'>
          <button className='btn btn-primary btn-sm' onClick={showItems}>
            View Items
          </button>
        </p>
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  noteitem: PropTypes.object.isRequired
};
export default NoteItem;
