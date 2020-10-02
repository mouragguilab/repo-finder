import styled from 'styled-components';
import {
  Link,
} from "react-router-dom";

export const Container = styled.li`
  padding: 0px;
  list-style: none;
`;

export const ItemLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 0px;
  border: 1px solid #D3D4D5;
  padding: 18px;
  border-radius: 5px;
  margin: 12px 0px;
  cursor: pointer;
  text-decoration: none;
  color: initial;
`;

export const LangContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LangName = styled.span`
  display: inline-block;
  margin-right: 8px;
  font-size: 14px;
  font-weight: 600;

  &:after {
    content: '';
    display: inline-block;
    background-color: ${props => props.color};
    width: 10px;
    height: 10px;
    margin-left: 8px;
    border-radius: 50%;
  }
`;