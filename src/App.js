import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { uuid } from 'uuidv4';



function App(){
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact); // Log the contact data to the console
    setContacts([...contacts, {id: uuid(), ...contacts}]); 
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    const saveContactsToLocalStorage = () => {
      if(contacts.length !== 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }
  saveContactsToLocalStorage();
  }, [contacts]);
return (
  <div className='ui container'>
    <Header />
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts} getContactId={removeContactHandler} />  
    </div>
    )
    };

export default App;
