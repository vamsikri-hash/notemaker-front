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

export default (state, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(noteitem =>
          noteitem.id === action.payload.id ? action.payload : noteitem
        )
      };

    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case NOTE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
