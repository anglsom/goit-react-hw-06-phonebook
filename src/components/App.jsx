// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import Section from './Section';
// import Forma from './Forma';
// import ContactList from './ContactList';
// import Filter from './Filter';
// import { nanoid } from 'nanoid';

// export default function App() {
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const contactsfromLocalStorage = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contactsfromLocalStorage);

//     if (!parsedContacts) {
//       return;
//     }

//     setContacts(parsedContacts);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const formSubmitHandler = data => {
//     const { name, number } = data;

//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     contacts.some(contact => contact.name === name)
//       ? alert(`${name} is already in contacts`)
//       : setContacts(prevContacts => [contact, ...prevContacts]);
//   };

//   const deleteContact = id => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== id)
//     );
//   };

//   const changeFilter = e => {
//     setFilter(e.target.value);
//   };

//   const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   return (
//     <Section>
//       <h1>Phonebook</h1>
//       <Forma onSubmit={formSubmitHandler} />

//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList
//         contacts={getFilteredContacts()}
//         onDeleteContact={deleteContact}
//       />
//     </Section>
//   );
// }

import Section from './Section';
import Forma from './Forma';
import ContactList from './ContactList';
import Filter from './Filter';

export default function App() {
  return (
    <Section>
      <h1>Phonebook</h1>
      <Forma />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Section>
  );
}