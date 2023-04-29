import { NameInput, NumberInput } from 'components/Inputs/index';
import { Form, SubmitButton } from './Form.styled';

export const AppForm = ({
  handleFormSubmit,
  handleInputChange,
  nameValue,
  numberValue,
}) => {
  return (
    <Form onSubmit={handleFormSubmit} autoComplete="off">
      <NameInput
        value={nameValue}
        handleInputChange={handleInputChange}
      ></NameInput>
      <NumberInput
        value={numberValue}
        handleInputChange={handleInputChange}
      ></NumberInput>
      <SubmitButton type="submit">Add contact!</SubmitButton>
    </Form>
  );
};
