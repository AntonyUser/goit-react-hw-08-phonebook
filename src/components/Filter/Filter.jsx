import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filtersSlice';
import { selectFilter } from 'redux/filter/selectors';

import { Div } from './Filter.styled';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <Div>
      <h2>Contacts</h2>
      <InputLabel htmlFor="input-with-icon-adornment">
        Filter contacts by name
      </InputLabel>
      <Input
        type="text"
        value={value}
        onChange={onChangeFilter}
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
      {/* <Label>
        Filter contacts by name
        <Input type="text" value={value} onChange={onChangeFilter}></Input>
      </Label> */}
    </Div>
  );
};
