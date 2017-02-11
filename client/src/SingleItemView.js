import React from 'react';
import {browserHistory} from 'react-router';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50vw;
  height: 75vh;
  margin: 3vh auto;
  box-shadow: 1px 1px 1px #999;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background-color: #fafafa;
`;

const BackButton = styled.button`
  letter-spacing: -8px;
  padding-left: 0;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  fontSize: 2em;
  background-color: #fafafa;
  cursor: pointer;
  position: absolute;
  left: 5vw;
  top: 15vh;
`;

export const SingleItemView = props => {
  let anItem = props.items.filter(item => (
    item.slug === props.params.slug
  ));
  return (
    <Item>
    <BackButton onClick={() => browserHistory.push('/items')}> &lt;-- </BackButton>
      <span style={{display: 'flex', justifyContent:'space-around'}}>
        <h2>{anItem[0].title}</h2><h4>{anItem[0].price}</h4>
      </span>
      <img src={anItem[0].imgUrl} alt={anItem[0].title} style={{maxWidth: '400px', margin: '0 auto'}}/>
      <p>{anItem[0].description}</p>
    </Item>
  )
}
