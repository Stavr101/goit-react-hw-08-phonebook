import { FormAddContact } from './FormAddContact';
import { ContactsList } from './ContactsList';
import Filter from './Filter';

export default function Phonebook() {
  return (
    <div>
      <h1>Phonebook</h1>
      <FormAddContact />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
