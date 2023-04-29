import PropTypes from 'prop-types';
import { FormInput, FormInputLabel } from './Input.styled';
import { nanoid } from 'nanoid';

export const NameInput = ({ value, handleInputChange }) => {
  const numberId = nanoid();

  return (
    <>
      <FormInputLabel htmlFor={numberId}>Name</FormInputLabel>
      <FormInput
        type="text"
        id={numberId}
        name="name"
        value={value}
        // pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        pattern="[a-zA-Z\u0400-\u04ff\s]{3,30}"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
      ></FormInput>
    </>
  );
};

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
