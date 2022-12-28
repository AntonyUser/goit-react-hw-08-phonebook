import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 12px 60px 12px 12px;
  min-width: 400px;
`;
export const Item = styled.li`
  margin: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px coral solid;
  font-size: 18px;
  letter-spacing: 2px;
`;
export const Label = styled.input`
  display: block;
  padding: 10px;
  border-radius: 4px;
  font-size: 22px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  min-width: 300px;
`;
export const NameDiv = styled.div`
  margin-left: 40px;
`;
