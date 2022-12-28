import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { Item, List, Div, NameDiv } from './ContactList.styled';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { AvatarGenerator } from 'random-avatar-generator';
import Avatar from '@mui/material/Avatar';

export const ContactList = () => {
  const dispatch = useDispatch(selectFilter);
  const generator = new AvatarGenerator();

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
            <Div>
              <Avatar alt="#" src={generator.generateRandomAvatar()} />
              <NameDiv>
                {name}: {number}
              </NameDiv>
            </Div>
            <IconButton
              aria-label="delete"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Item>
        );
      })}
    </List>
  );
};
