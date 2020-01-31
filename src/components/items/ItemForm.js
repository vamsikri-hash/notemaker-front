import React, { useState, useEffect, useContext } from "react";
import ItemContext from "../../context/item/itemContext";

const ItemForm = () => {
  const itemContext = useContext(ItemContext);
  const { AddItem, UpdateItem, clearCurrentItem, current, error } = itemContext;

  useEffect(() => {
    if (current !== null) {
      setItem(current);
    } else {
      setItem({ name: "", deadline: "", done: false });
    }
  }, [error, itemContext, current]);

  const [item, setItem] = useState({ name: "", deadline: "", done: false });
  const { name, deadline, done } = item;
  const onChange = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
      done: e.target.checked
    });
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
        <div className='form-group large'>
          <label htmlFor='name'>Item Name</label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
        <div className='form-group large'>
          <label htmlFor='date'>Deadline</label>
          <input
            type='date'
            name='deadline'
            value={deadline}
            onChange={onChange}
          />
        </div>
        <div className='form-group large'>
          <input
            type='checkbox'
            name='done'
            className='m-2 x-large'
            onChange={onChange}
            checked={done ? "checked" : ""}
          />
          <label htmlFor='done'>Completed</label>
        </div>
        <input
          type='submit'
          value={current ? "Update Item" : "Add Item"}
          className='btn  btn-dark'
        />
        {current && (
          <div>
            <button className='btn btn-light btn-block m-2' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ItemForm;
