import React, { useReducer } from 'react';
import axios from 'axios';
import MessageContext from './messageContext';
import messageReducer from './messageReducer';
import { ADD_MESSAGE, MESSAGE_ERROR, GET_MESSAGES } from '../types';

import setAuthToken from '../../utils/setAuthToken';

const MessageState = props => {
  const initialState = {
    errors: null,
    sent: false,
    messages: null
  };

  const [state, dispatch] = useReducer(messageReducer, initialState);

  // Get Messages
  const getMessages = async props => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get('/api/messages');

      dispatch({
        type: GET_MESSAGES,
        payload: res.data
      });
    } catch (err) {
      alert(err);
      localStorage.clear();
      props.history.push('/login');
    }
  };

  // Add Message (PUBLIC - anyone can send a message)
  const addMessage = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      axios
        .post('/api/messages', formData, config)
        .then(() => {
          // After message is successfully added, set 'sent' to true
          dispatch({
            type: ADD_MESSAGE
          });
        })
        .catch(err => {
          dispatch({
            type: MESSAGE_ERROR,
            payload: err.response.statusText
          });
        });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response
      });
    }
  };

  return (
    <MessageContext.Provider
      value={{
        messages: state.messages,
        errors: state.errors,
        sent: state.sent,
        getMessages,
        addMessage
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageState;
