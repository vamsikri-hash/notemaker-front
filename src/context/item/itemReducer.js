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

export default (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT_ITEM:
      return {
        ...state,
        current: null
      };
    case ITEM_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_ITEM_ERROR:
      return {
        ...state,
        current: null,
        error: null
      };
    default:
      return state;
  }
};
