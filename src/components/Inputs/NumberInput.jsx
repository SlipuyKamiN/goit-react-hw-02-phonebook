import { FormInput, FormInputLabel } from './Input.styled';
import { nanoid } from 'nanoid';

export const NumberInput = ({ value, handleInputChange }) => {
  const numberId = nanoid();

  return (
    <>
      <FormInputLabel htmlFor={numberId}>Number</FormInputLabel>
      <FormInput
        type="tel"
        id={numberId}
        name="number"
        value={value}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}
      ></FormInput>
    </>
  );
};
