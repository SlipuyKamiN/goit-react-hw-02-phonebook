import { ContactsList, ConctactListItem } from './Contacts.styled';

export const Contacts = ({ contacts }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ConctactListItem key={contact.id}>
          {contact.name}: {contact.number}
        </ConctactListItem>
      ))}
    </ContactsList>
  );
};
