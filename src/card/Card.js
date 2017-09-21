import React from 'react';

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width='75' src='https://avatars0.githubusercontent.com/u/5104397?v=4' alt='profile pic'/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          Jim Shaw
        </div>
        <div>Software Engineer</div>
      </div>
    </div>
  );
};

export default Card;
