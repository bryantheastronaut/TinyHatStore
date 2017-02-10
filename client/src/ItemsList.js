import React from 'react';
import styled from 'styled-components';

const ItemsContainer = styled.div`
  width: 90vw;
  height: 60vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 30px;
  box-shadow: 1px 1px 1px #333;
  background-color: #fafafa;
  border-radius: 10px;
  margin: 40px auto;
`;

export const ItemsList = props => (
  <ItemsContainer>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
  </ItemsContainer>
)
