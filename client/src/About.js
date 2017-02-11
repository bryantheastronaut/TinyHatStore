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
    <img style={{maxHeight: '80%'}} src='https://cdn0.vox-cdn.com/thumbor/ruLJMC3s9KZ3j2TWhyQWydSIskA=/0x453:1061x1050/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/47723111/81jtNhsOgfL._SL1500_.0.0.jpg' />
    <p>Be fly.</p>
  </Dialog>
)
