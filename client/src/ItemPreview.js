import React from 'react';
import {browserHistory} from 'react-router';
import styled from 'styled-components';

const SingleItem = styled.div`
  width: 30%;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #fff;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-height: 300px;
`;

export const ItemPreview = props => (
  <SingleItem onClick={() => browserHistory.push(`/items/${props.slug}`)}>
    <h2>{props.title}</h2>
    <img src={props.imgUrl} alt={props.title} style={{width: 150}}/>
    <p style={{fontSize: '1.2em'}}>{props.description}</p>
  </SingleItem>
)
