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
  NOTE_ERROR,
  CLEAR_NOTE_ERROR
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
        "Content-Type": "Application/json"
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
        "Content-Type": "Application/json"
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
        "Content-Type": "Application/json"
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
    try {
      await axios.delete(`http://localhost:3000/api/v1/notes/${id}`);
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
  //clear Note Error
  const clearNoteError = () => {
    dispatch({ type: CLEAR_NOTE_ERROR });
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
        clearCurrent,
        clearNoteError
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
