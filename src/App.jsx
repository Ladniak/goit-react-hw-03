import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedUsers = JSON.parse(stringifiedContacts) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
    return parsedUsers;
  });

  const [searchValue, setSearchValue] = useState("");

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid()
    }

    setContacts([...contacts, finalContact])
  }

  const onDeleteContact = (contactId) => {
    const updatedContact = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContact);
  }

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem("contacts", stringifiedContacts);
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox setSearchValue={setSearchValue} searchValue={searchValue} />
      <ContactList onDeleteContact={onDeleteContact} filteredContacts={filteredContacts} />
    </>
  )
}

export default App
