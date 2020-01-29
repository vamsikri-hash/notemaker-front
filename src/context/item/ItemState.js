import React, { useReducer } from "react";
import axios from "axios";
import ItemContext from "./itemContext";
import itemReducer from "./itemReducer";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  SET_CURRENT_ITEM,
  CLEAR_CURRENT_ITEM,
  UPDATE_ITEM,
  ITEM_ERROR,
  CLEAR_ITEM_ERROR
} from "../types";

const ItemState = props => {
  const initialState = {
    items: [],
    current: null,
    error: null
  };
  const n_id = localStorage.getItem("noteid");

  const [state, dispatch] = useReducer(itemReducer, initialState);

  //Get Items
  const GetItems = async () => {
    const config = {
      headers: {
        "Content-Type": "Application/json"
      }
    };
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/notes/${n_id}/items`,

        config
      );
      console.log(res.data);
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: ITEM_ERROR, payload: error.response.data.message });
    }
  };
  //Add Item
  const AddItem = async obj => {
    const config = {
      headers: {
        "Content-Type": "Application/json"
      }
    };
    try {
      console.log(obj);
      const res = await axios.post(
        `http://localhost:3000/api/v1/notes/${n_id}/items`,
        obj,
        config
      );
      console.log(res.data);
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: ITEM_ERROR, payload: error.response.data.message });
    }
  };

  //Update Item
  const UpdateItem = async obj => {
    const config = {
      headers: {
        "Content-Type": "Application/json"
      }
    };
    try {
      const res = await axios.put(
        `http://localhost:3000/api/v1/notes/${n_id}/items/${obj.id}`,
        obj,
        config
      );

      dispatch({
        type: UPDATE_ITEM,
        payload: res.data
      });
      console.log(state.items);
    } catch (error) {
      console.log(error.response);
      dispatch({ type: ITEM_ERROR, payload: error.response.data.message });
    }
  };
  //DeleteItem

  const DeleteItem = async id => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/notes/${n_id}/items/${id}`
      );
      dispatch({
        type: DELETE_ITEM,
        payload: id
      });
    } catch (error) {
      dispatch({ type: ITEM_ERROR, payload: error.response.data });
    }
  };

  //setCurrent
  const setCurrentItem = item => {
    dispatch({ type: SET_CURRENT_ITEM, payload: item });
  };
  //Clear Current
  const clearCurrentItem = () => {
    dispatch({ type: CLEAR_CURRENT_ITEM });
  };
  //clear Item Error
  const clearItemError = () => {
    dispatch({ type: CLEAR_ITEM_ERROR });
  };
  //Clear Item

  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        current: state.current,
        error: state.error,
        AddItem,
        GetItems,
        UpdateItem,
        DeleteItem,
        setCurrentItem,
        clearCurrentItem,
        clearItemError
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;
