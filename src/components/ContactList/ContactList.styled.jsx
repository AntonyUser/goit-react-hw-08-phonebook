import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 12px;
  min-width: 400px;
`;
export const Item = styled.li`
  margin: 12px;
  display: flex;
  justify-content: space-between;
`;
export const Label = styled.input`
  display: block;
  padding: 10px;
  border-radius: 4px;
  font-size: 22px;
`;
export const Button = styled.button`
  font-size: 13px;
  margin-left: 15px;
  padding: 6px;
`;
