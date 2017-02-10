import React from 'react';
import {Item} from './Item';
import {browserHistory} from 'react-router';
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

export const ItemsList = props => {
  const items = props.items.map((item, idx) => (
    <Item
      key={idx}
      title={item.title}
      imgUrl={item.imgUrl}
      description={item.description}
      slug={item.slug}/>
  ));
  return (
    <ItemsContainer>
      {items} yay
    </ItemsContainer>
  );
};

// export default class ItemsList extends Component {
//
//   render() {
//     const items = props.items.map((item, idx) => (
//       <Item
//         key={idx}
//         title={item.title}
//         imgUrl={item.imgUrl}
//         description={item.description}/>
//     ))
//     return (
//       <ItemsContainer>
//         {items}
//       </ItemsContainer>
//     );
//   }
// }
