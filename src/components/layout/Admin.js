import React, { useEffect, useContext } from 'react';
import MessageContext from '../../context/message/messageContext';

const Admin = props => {
  // Access action
  const messageContext = useContext(MessageContext);
  // Message state
  const { getMessages, messages } = messageContext;

  useEffect(() => {
    getMessages(props);
    // eslint-disable-next-line
  }, []);

  const Logout = () => {
    localStorage.clear();
    props.history.push('/login');
  };

  if (messages) {
    return (
      <div className='row justify-content-center'>
        <div>
          <button type='submit' onClick={Logout}>
            Logout
          </button>
        </div>
        <ul>
          {messages.map((msg, index) => {
            return (
              <li key={index} className='message-item'>
                <div className='mx-auto'>
                  <div className='card border border-dark'>
                    <div className='card-body'>
                      <h4 className='card-title'>
                        <b>Name:</b> {msg.name}
                      </h4>
                      <div className='card-text'>
                        <small>
                          <b>Email: {msg.email}</b>
                        </small>
                        <br />
                        <br />
                        <b>Message:</b>
                        <p>{msg.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <p>No messages</p>;
  }
};

export default Admin;
