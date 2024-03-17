import { Component } from 'react';
import { Form, Input, NameLabel, NumberLabel, SubmitButton,  } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ id: '', name: '', number: '', });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <NameLabel>
          Name{' '}
          <Input
            type="text"
            name="name"
            pattern='[A-Za-z0-9]{2,}'
            placeholder='Enter your name'
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </NameLabel>
        <NumberLabel>
          Number
          <Input
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder='Enter number (123-45-67)'
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </NumberLabel>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    );
  }
}
