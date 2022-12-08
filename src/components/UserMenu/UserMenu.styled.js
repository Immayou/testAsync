import styled from '@emotion/styled';

export const HeaderUserText = styled.p`
  color: #000000;
  font-size: 22px;
  font-family: inherit;
  letter-spacing: 0.2ch;
`;

export const HeaderButton = styled.button`
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  font-family: inherit;
  text-transform: uppercase;
  border-radius: 7px;
  font-family: inherit;
  background: #c5dde8;
  border-radius: 12px;
  padding: 7px 12px;
  line-height: 1.17;
  letter-spacing: 0.1ch;
  border-bottom: 2px solid gray;
  color: #000000;
  transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    letter-spacing 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover,
  :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    color: grey;
    background-color: #eecfba;
    letter-spacing: 0.1ch;
  }
`;

export const HeaderUser = styled.span`
  font-size: 25px;
  color: #6ca1bb;
  text-shadow: 0 2px 1px #e9eff6, -1px 3px 1px #e9eff6, -2px 5px 1px #e9eff6;
`;
