import React, { useState } from 'react';

const EmailForm = () => {
  const [message, setMessage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMessage('Thank you!');
    setTimeout(() => {
      setMessage('');
    }, 3000);
  }

  return (
    <form id="signup-form" onSubmit={onSubmit} method="post" action="#">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter email for updates"
      />
      <input type="submit" value="Sign Up" />
      <span className={`${message ? 'visible success' : ''} message`}>
        {message}
      </span>
    </form>
  );
}

export default EmailForm;
