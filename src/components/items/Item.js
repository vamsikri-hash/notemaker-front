import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import ItemContext from "../../context/item/itemContext";

const Item = ({ item }) => {
  const itemContext = useContext(ItemContext);
  const { DeleteItem, setCurrentItem, clearCurrentItem } = itemContext;

  const { id, name, deadline, done, created_at, updated_at } = item;

  const created = new Date(created_at);
  const updated = new Date(updated_at);

  const onDelete = () => {
    DeleteItem(id);
    clearCurrentItem();
  };

  return (
    <div className='card bg-light' style={{ display: "-webkit-box" }}>
      <div>
        {name && <h3 className='text-primary text-left'>{name}</h3>}
        {deadline && (
          <h2 className=' text-left'>
            <span className='bd-dark x-large'>DeadLine:</span>{" "}
            <span className='text-primary'>{deadline}</span>
          </h2>
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
      <div>
        Status:{" "}
        {done ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired
};
export default Item;
