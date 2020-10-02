import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OwnerImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const OwnerName = styled.span`
  font-size: 24px;
  margin: 0px;
  font-weight: 400;
  margin-right: 4px;

  a {
    text-decoration: none;
  }
  
  &:after {
    position: relative;
    content: '/';
    right: -4px;
    font-weight: 100;
  }
`;

export const RepoName = styled.span`
  font-size: 24px;
  margin: 0px;
  font-weight: 600;
  margin-left: 4px;

  a {
    text-decoration: none;
  }
`;