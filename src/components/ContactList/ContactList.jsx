import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectFilter, selectContacts } from 'redux/selectors';
import { Item, List, Button } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch(selectFilter);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visiableContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {visiableContacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
