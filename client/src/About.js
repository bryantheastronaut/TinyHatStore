import React from 'react';
import styled from 'styled-components';

const Dialog = styled.div`
  width: 80vw;
  min-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fafafa;
  border-radius: 10px;
  text-align: center;
  box-shadow: 1px 1px 1px #333;
  height: 60vh;
`;

export const About = props => (
  <Dialog>
    <h1>Tiny hats! How about that!</h1>
  </Dialog>
)
