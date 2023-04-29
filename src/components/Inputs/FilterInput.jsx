import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterWrapper, FormInput, FormInputLabel } from './Input.styled';

export const Filter = ({ filterValue, handleFilterChange }) => {
  const filterId = nanoid();

  return (
    <FilterWrapper>
      <FormInputLabel htmlFor={filterId}>Find contacts by name</FormInputLabel>
      <FormInput
        autoComplete="off"
        type="text"
        id={filterId}
        name="filter"
        value={filterValue}
        onChange={handleFilterChange}
      ></FormInput>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
