import React, { Fragment, useEffect, useContext } from "react";
import ItemContext from "../../context/item/itemContext";
import Item from "./Item";

const Items = () => {
  const itemContext = useContext(ItemContext);
  const { items, GetItems } = itemContext;

  useEffect(() => {
    GetItems();
    //eslint-disable-next-line
  }, []);
  if (items !== null && items.length === 0) {
    return <h2>Please, Add a Item</h2>;
  }
  return (
    <Fragment>
      {items !== null ? (
        items.map(item => <Item key={item.id} item={item} />)
      ) : (
        <h2>nothing</h2>
      )}
    </Fragment>
  );
};

export default Items;
