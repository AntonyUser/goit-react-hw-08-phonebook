import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import { selectFilter } from 'redux/selectors';

import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <>
      <Label>
        Filter contacts by name
        <Input type="text" value={value} onChange={onChangeFilter}></Input>
      </Label>
    </>
  );
};
