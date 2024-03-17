import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ALterText, Container, SubTitle, Title } from './App.styled';
import initialContacts from './data.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('state');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state) {
      console.log('Changes');
      localStorage.setItem('state', JSON.stringify(this.state.contacts));
    }
  }

  contactFormSubmitHandler = data => {
    if (this.state.contacts.some(contact => contact.name === data.name)) {
      Notiflix.Notify.failure(`${data.name} is already in contacts`);
      return;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilterHandler = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContactHandler = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.contactFormSubmitHandler} />
        {this.state.contacts.length > 0 && <SubTitle>Contacts</SubTitle>}
        {this.state.contacts.length < 1 && (
          <ALterText>There is no contacts in your contactlist</ALterText>
        )}
        {this.state.contacts.length > 1 && (
          <Filter value={filter} onChange={this.changeFilterHandler} />
        )}
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContactHandler}
        />
      </Container>
    );
  }
}
