import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderButton = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  font-size: 22px;
  font-family: inherit;
  border-radius: 12px;
  padding: 5px;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    letter-spacing 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    color: grey;
    letter-spacing: 0.28ch;
  }
  &.active {
    background-color: #c5dde8;
    border: 1px solid #000000;
  }
`;
