import React, { useContext, useState, useEffect } from 'react';
import MessageContext from '../../context/message/messageContext';

const Contact = () => {
  const messageContext = useContext(MessageContext);

  // Display some feedback to user after message is sent (true) or there are errors (initially null)
  const { addMessage, sent, errors } = messageContext;

  useEffect(() => {}, [sent, errors]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const { name, email, message } = contact;

  const onSubmit = e => {
    e.preventDefault();
    addMessage(contact);
  };

  return (
    <div className='col-12 mt-5 pb-5' id='contact-form'>
      <div className='row justify-content-center pb-3 pt-3'>
        <h1 style={{ fontFamily: 'Raleway' }}>Contact Me</h1>
      </div>
      <div className='row justify-content-center'>
        {!sent ? (
          <form onSubmit={onSubmit}>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Name</span>
              </div>
              <input
                type='text'
                name='name'
                onChange={onChange}
                value={name}
                placeholder=''
                className='form-control'
                required
              />
            </div>

            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Email</span>
              </div>
              <input
                type='email'
                name='email'
                onChange={onChange}
                value={email}
                placeholder=''
                className='form-control'
                required
              />
            </div>

            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Message</span>
              </div>
              <textarea
                name='message'
                onChange={onChange}
                value={message}
                className='form-control'
                required
              />
            </div>

            <div className='row justify-content-center'>
              <button type='submit' className='btn btn-primary'>
                Send
              </button>
            </div>
          </form>
        ) : !errors ? (
          <span className='alert alert-success'>Message Sent</span>
        ) : (
          <span className='alert alert-danger'>{errors}</span>
        )}
      </div>
    </div>
  );
};

export default Contact;
