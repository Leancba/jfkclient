import {
  GET_ALL_NOTICES,
  POST_NOTICE,
  DELETE_NOTICE,
  PUT_NOTICE,
  LOGIN,
} from "../Actions/Types";

const initialState = {
  allNotices: [],
  token: localStorage.getItem('token'),
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTICES:
      return {
        ...state,
        allNotices: action.payload,
      };

    case LOGIN:
    
      localStorage.setItem('token', action.payload.token);
      
      return {
        ...state,
      };

    case PUT_NOTICE:
      return {
        ...state,
      };

    case POST_NOTICE:
      return {
        ...state,
      };

    case DELETE_NOTICE:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
