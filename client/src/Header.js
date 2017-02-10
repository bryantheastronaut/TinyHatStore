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
  flex-flow: row wrap;
  width: 20vw;
`;

const StyledLink = styled(Link)`
  color: white;
  font-weight: 100;
  text-decoration: none;
`;

export const Header = props => (
  <Title>
    <h2 style={{paddingLeft: 10}}>
      <i style={{color: 'white', margin: 5}} className='fa fa-chevron-up'></i>
        Tiny Hat Store
      <i style={{color: 'white', margin: 5}} className='fa fa-chevron-up'></i>
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
    </SubMenu>
  </Title>
);
