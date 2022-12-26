import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filtersSlice';
import { selectFilter } from 'redux/filter/selectors';

import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <>
      <h2>Contacts</h2>
      <Label>
        Filter contacts by name
        <Input type="text" value={value} onChange={onChangeFilter}></Input>
      </Label>
    </>
  );
};
