import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { useForm } from '../hooks';

const EmailForm = () => {
  const [mailchimpResult, setMailchimpResult] = useState({ result: '', msg: '' });
  const [isDisabled, setIsDisabled] = useState(false);
  const { handleChange, handleSubmit, values } = useForm(handleSuccess);

  async function handleSuccess() {
    const result = await addToMailchimp(values.email, { NAME: values.name });
    setMailchimpResult({...result, msg: fixMailchimpMessage(result.msg)});
    setIsDisabled(true);

    setTimeout(() => {
      setMailchimpResult({ error: '', msg: '' });
      setIsDisabled(false);
    }, 3000);
  }

  function getMessageClassName() {
    switch (mailchimpResult.result) {
      case 'success':
        return 'visible success';
      case 'error':
        return 'visible failure';
      default:
        return '';
    }
  }

  function fixMailchimpMessage(msg) {
    if (msg.includes('subscribed')) {
      return `${values.email} is already subscribed.`
    }
    return msg;
  }

  return (
    <form id="signup-form" onSubmit={handleSubmit} method="post" action="#">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        onChange={handleChange}
        value={values.name}
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter email for updates"
        onChange={handleChange}
        value={values.email}
        required
      />
      <input type="submit" value="Subscribe" disabled={isDisabled} />
      <span className={`${getMessageClassName()} message`}>
        {mailchimpResult.msg}
      </span>
    </form>
  );
}

export default EmailForm;
