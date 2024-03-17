import { DeleteButton, List, ListItem } from "./ContactList.styled";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>{name}: {number}</p>
          <DeleteButton type="button" onClick={() => {onDelete(id)}}>Delete</DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};
