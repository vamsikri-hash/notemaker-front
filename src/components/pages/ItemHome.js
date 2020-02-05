import React, { useContext, useEffect } from "react";
import ItemForm from "../items/ItemForm";
import AuthContext from "../../context/auth/authContext";
import Items from "../items/Items";
import Spinner from "../Layout/Spinner";

const ItemHome = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loaduser();
    //eslint-disable-next-line
  }, []);
  const { loading } = authContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='grid-2'>
        <div>
          <ItemForm />
        </div>
        <div>
          <Items />
        </div>
      </div>
    );
  }
};

export default ItemHome;
