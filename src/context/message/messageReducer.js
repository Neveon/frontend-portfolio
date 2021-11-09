import { ADD_MESSAGE, MESSAGE_ERROR, GET_MESSAGES } from '../types';

const messageReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        errors: null,
        sent: true,
        messages: null
      };
    case MESSAGE_ERROR:
      return {
        messages: null,
        errors: action.payload,
        sent: true
      };
    case GET_MESSAGES:
      return {
        messages: action.payload,
        errors: null,
        sent: false
      };

    default:
      return state;
  }
};
export default messageReducer;