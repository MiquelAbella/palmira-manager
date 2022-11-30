import { combineReducers } from "redux";

const INITIAL_STATE = {
  uid: null,
  isLoading: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCHING":
      return {
        ...state,
        isLoading: true,
      };
    case "NOT_FETCHING":
      return {
        ...state,
        isLoading: false,
      };
    case "USER_REGISTER":
      return {
        ...state,
        ...action.payload,
      };
    case "USER_LOGIN":
      return {
        ...state,
        ...action.payload,
      };
    case "USER_SET_SCHEDULE":
      return {
        ...state,
        ...action.payload,
      };
    case "USER_POST_SETTINGS":
      return {
        ...state,
        ...action.payload,
      };
    case "USER_GET": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
