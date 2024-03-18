import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ALterText, Container, SubTitle, Title } from './App.styled';
import initialContacts from './data.json';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('state')) ?? initialContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(contacts));
  }, [contacts]);

  const contactFormSubmitHandler = data => {
    if (contacts.some(contact => contact.name === data.name)) {
      Notiflix.Notify.failure(`${data.name} is already in contacts`);
      return;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };

    setContacts(prevState => [newContact, ...prevState]);
  };

  const changeFilterHandler = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContactHandler = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={contactFormSubmitHandler} />
      {contacts.length > 0 && <SubTitle>Contacts</SubTitle>}
      {contacts.length < 1 && (
        <ALterText>There is no contacts in your contactlist</ALterText>
      )}
      {contacts.length > 1 && (
        <Filter value={filter} onChange={changeFilterHandler} />
      )}
      <ContactList
        contacts={getFilteredContacts()}
        onDelete={deleteContactHandler}
      />
    </Container>
  );
};
