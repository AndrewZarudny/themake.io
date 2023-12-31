import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("xrgwvooq");
  if (state.succeeded) {
      return <p>THanks for the message</p>;
  }
  return (
      <form className = "p-form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Form;
