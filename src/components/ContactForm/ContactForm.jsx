import { useState } from 'react';
import {
  Form,
  Input,
  NameLabel,
  NumberLabel,
  SubmitButton,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <NameLabel>
        Name
        <Input
          type="text"
          name="name"
          pattern="[A-Za-z0-9]{2,}"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
          required
        />
      </NameLabel>
      <NumberLabel>
        Number
        <Input
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="Enter number (123-45-67)"
          value={number}
          onChange={handleChange}
          required
        />
      </NumberLabel>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
