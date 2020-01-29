import React, { useContext } from "react";
import PropTypes from "prop-types";
import ItemContext from "../../context/item/itemContext";

const Item = ({ item }) => {
  const itemContext = useContext(ItemContext);
  const { DeleteItem, setCurrentItem, clearCurrentItem } = itemContext;

  const { id, name, deadline } = item;
  /* try to woking on adding this
  const created = new Date(created_at);
  const updated = new Date(updated_at);   **/

  const onDelete = () => {
    DeleteItem(id);
    clearCurrentItem();
  };

  return (
    <div className='card bg-light'>
      {name && <h3 className='text-primary text-left'>Name:{name}</h3>}
      {deadline && (
        <h3 className='text-primary text-left'>DeadLine:{deadline}</h3>
      )}

      <div style={{ display: "flex" }}>
        <p className='m-1'>
          <button
            className='btn btn-dark btn-sm'
            onClick={() => setCurrentItem(item)}
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
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired
};
export default Item;
