import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Text, Button } from './ContactsList.styled';
import * as selectors from 'redux/contacts/selectors';
import * as operations from 'redux/contacts/operations';

export const ContactsList = () => {
  
  const dispatch = useDispatch();

  const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);

  const getVisibleContacts = () => {
    if (filter && filter.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }

    return contacts;
  };
 
   const handleDelete = id => dispatch(operations.deleteContact(id));

  return (
    <>
      {contacts.length > 0 && (
          <List>
            {getVisibleContacts().map(contact => (
              <Item key={contact.id}>
                <Text>
                  {contact.name} : {contact.number}
                </Text>
                <Button
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </Button>
              </Item>
            ))}
          </List>
        )}
    </>
  );
};;


