import React from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 65px;
  background-color: palevioletred;
`;

const SubMenu = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
  width: 25vw;
`;

const StyledLink = styled(Link)`
  color: white;
  font-weight: 100;
  text-decoration: none;
`;

export const Header = props => (
  <Title>
    <h2 style={{paddingLeft: 10, marginTop: 30}}>
      <i style={{color: 'lightblue', position: 'relative', left: 25, top: -20}} className='fa fa-chevron-up'></i>
        <span style={{color: 'white'}}>Tiny<span style={{color: '#555'}}>Hat</span>Store</span>
      <i style={{color: 'lightblue', position: 'relative', left: -25, top: -20}} className='fa fa-chevron-up'></i>
    </h2>
    <SubMenu>
      <h2>
        <StyledLink
          to='/'
          activeStyle={{color: 'black'}}
          onlyActiveOnIndex
        >Home</StyledLink>
      </h2>
      <h2>
        <StyledLink
          to='/items'
          activeStyle={{color: 'black'}}
        >View Items</StyledLink>
      </h2>
      <h2>
        <StyledLink
          to='/login'
          activeStyle={{color: 'black'}}
        >Log in</StyledLink>
      </h2>
    </SubMenu>
  </Title>
);
