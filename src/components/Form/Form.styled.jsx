import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 300px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 15px;
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #fed800;
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: gray;
    color: #fff;
  }
`;
