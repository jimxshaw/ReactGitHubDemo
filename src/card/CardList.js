import React from 'react';
import Card from './Card';

const CardList = (props) => {
  return (
    <div>
      {props.cards.map((card, i) => <Card key={i} {...card} />)}
    </div>
  );
};

export default CardList;