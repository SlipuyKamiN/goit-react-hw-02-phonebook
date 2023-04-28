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
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
      ></FormInput>
    </>
  );
};
