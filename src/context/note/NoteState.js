import React, { useReducer } from "react";
import axios from "axios";
import NoteContext from "./noteContext";
import noteReducer from "./noteReducer";
import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_NOTE,
  CLEAR_NOTES,
  NOTE_ERROR
} from "../types";

const NoteState = props => {
  const initialState = {
    notes: [],
    current: null,
    error: null
  };
  const [state, dispatch] = useReducer(noteReducer, initialState);

  //Get Notes
  const GetNotes = async () => {
    const config = {
      headers: {
        "Content-Type": "Application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzkxOTk2MTd9.sYLI9SjkxEO9qiw5KDmcyp0UoA3Ubyii_1yDwk4w1W0"
      }
    };
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/notes",

        config
      );
      console.log(res.data);
      dispatch({
        type: GET_NOTES,
        payload: res.data
      });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: NOTE_ERROR, payload: error.response.data.message });
    }
  };
  //Add Note
  const AddNote = async obj => {
    const config = {
      headers: {
        "Content-Type": "Application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzkyNDU5MDN9.26UwUfO62L5jel3I35n1OIreuRfWQxZ_3-LgHIvCnE8"
      }
    };
    try {
      console.log(obj);
      const res = await axios.post(
        "http://localhost:3000/api/v1/notes",
        obj,
        config
      );
      console.log(res.data);
      dispatch({
        type: ADD_NOTE,
        payload: res.data
      });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: NOTE_ERROR, payload: error.response.data.message });
    }
  };

  //Update Note
  const UpdateNote = async obj => {
    const config = {
      headers: {
        "Content-Type": "Application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzkyNDU5MDN9.26UwUfO62L5jel3I35n1OIreuRfWQxZ_3-LgHIvCnE8"
      }
    };
    try {
      const res = await axios.put(
        `http://localhost:3000/api/v1/notes/${obj.id}`,
        obj,
        config
      );

      dispatch({
        type: UPDATE_NOTE,
        payload: res.data
      });
      console.log(state.notes);
    } catch (error) {
      console.log(error.response);
      dispatch({ type: NOTE_ERROR, payload: error.response.data.message });
    }
  };
  //Delete NOte

  const DeleteNote = async id => {
    const config = {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzkyNDU5MDN9.26UwUfO62L5jel3I35n1OIreuRfWQxZ_3-LgHIvCnE8"
      }
    };

    try {
      await axios.delete(
        `http://localhost:3000/api/v1/notes/${id}`,

        config
      );
      dispatch({
        type: DELETE_NOTE,
        payload: id
      });
    } catch (error) {
      dispatch({ type: NOTE_ERROR, payload: error.response.data });
    }
  };

  //setCurrent
  const setCurrent = note => {
    dispatch({ type: SET_CURRENT, payload: note });
  };
  //Clear Current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Clear Notes

  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        current: state.current,
        error: state.error,
        AddNote,
        GetNotes,
        UpdateNote,
        DeleteNote,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
