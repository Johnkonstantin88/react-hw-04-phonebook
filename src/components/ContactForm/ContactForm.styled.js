import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 360px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;

export const NameLabel = styled.label`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 39px;
  width: 360px;
  font-size: 22px;
  font-weight: 700;
`;

export const NumberLabel = styled.label`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 16px;
  width: 360px;
  font-size: 22px;
  font-weight: 700;
  border-color: #b0c0c3;
`;

export const SubmitButton = styled.button`
  width: 120px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  text-align: center;
  font-size: 18px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  border-color: #b0c0c3;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 0px rgba(75, 109, 115, 1);
  &:hover {
    background-color: rgba(178, 204, 204, 1);
  }
  transition: background-color 250ms cubic-bezier(0.47, 0, 0.745, 0.715);
`;

export const Input = styled.input`
  outline: none;
  border: solid 1px #b0c0c3;
  border-radius: 2px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-weight: 700;
`;
