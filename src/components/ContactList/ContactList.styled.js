import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 400px;
  margin-top: 0;
  padding-left: 0;
  list-style: none;
  font-size: 20px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-weight: 700;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 36px;
`;

export const DeleteButton = styled.button`
  width: 60px;
  height: 26px;
  padding: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  border-color: #b0c0c3;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 0px rgba(75, 109, 115, 1);
  &:hover {
    background-color: rgba(178, 204, 204, 1);
  }
  transition: background-color 250ms cubic-bezier(0.47, 0, 0.745, 0.715);
`;
