import styled, { css } from 'styled-components';

export const Container = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  border: 1px solid #D3D4D5;
  border-radius: 5px;
  background-color: #eff3f6;
  font-size: 18px;
  font-weight: 600;
  background-image: linear-gradient(180deg, #fafbfc, #eff3f6 90%);
  outline: none;
  cursor: pointer;
  user-select: none;

  &:active {
    background-image: linear-gradient(180deg, #eff3f6, #fafbfc 90%);
  }

  &:disabled {
    pointer-events: none;
    background-image: none;
    background-color: #EEEEEE;
    color: rgba(16, 16, 16, 0.3);
  }
`;

export const GithubIcon = styled.img`
  position: absolute;
  left: 10px;
  height: 30px;
  width: 30px;

  ${props => props.disabled && css`
    opacity: .5;
  `}
`;