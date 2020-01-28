import React, { useState, useEffect, useContext } from "react";
import ItemContext from "../../context/item/itemContext";
import AlertContext from "../../context/alert/alertContext";

const NoteForm = () => {
  const itemContext = useContext(ItemContext);
  const {
    AddItem,
    UpdateItem,
    clearCurrentItem,
    current,
    error,
    clearItemError
  } = itemContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  useEffect(() => {
    if (current !== null) {
      setItem(current);
    } else {
      setItem({ name: "", deadline: "" });
    }
  }, [error, itemContext, current]);

  const [item, setItem] = useState({ name: "", deadline: "" });
  const { name, deadline } = item;
  const onChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("entering submit");
    console.log(item);
    if (current === null) {
      AddItem(item);
    } else {
      UpdateItem(item);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrentItem();
  };
  return (
    <div className='form-container'>
      <h1>Create Item</h1>

      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Item Name</label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='date'>Item Name</label>
          <input
            type='date'
            name='deadline'
            value={deadline}
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          value={current ? "Update Item" : "Add Item"}
          className='btn  btn-dark'
        />
        {current && (
          <div>
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
