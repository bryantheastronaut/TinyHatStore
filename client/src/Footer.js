import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 100vw;
  padding: 10px;
  background-color: palevioletred;
`;

export const Footer = props => (
  <StyledFooter>footer</StyledFooter>
)
