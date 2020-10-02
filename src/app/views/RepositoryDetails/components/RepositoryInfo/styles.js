import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  border-collapse: collapse;
  color: #24292e;
  font-size: 16px;
  margin-top: 16px;
`;

export const InfoValue = styled.td`
  width: 50%;
  padding: 12px;
  border: 0px;
  border: 1px solid #e1e4e8;
  font-weight: 600;
  font-size: 16px;
`;

export const InfoKey = styled(InfoValue)`
  font-weight: 400;

  div {
    display: flex;
    align-items: center;
  }
`;

export const InfoIcon = styled.img`
  margin-right: 12px;
`;


