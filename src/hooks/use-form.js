import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({ email: '', name: '' });

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  }

  return {
    handleChange,
    handleSubmit,
    values,
  }
}

export default useForm;