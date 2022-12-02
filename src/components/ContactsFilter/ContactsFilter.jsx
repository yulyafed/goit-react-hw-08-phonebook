import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { Label, Input } from './ContactsFilter.styled';

export const ContactsFilter = () => {

  const filter = useSelector(getFilter);
  
  const dispatch = useDispatch();
  
    const filterChanged = e => {
      dispatch(setFilter(e.currentTarget.value.trim()));
    }

  return (
    <>
      <Label>
        Find contacts by name <br />
        <Input
          type="text"
          value={ filter }
          onChange={filterChanged}
        />
      </Label>
    </>
  );
};


