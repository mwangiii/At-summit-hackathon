import React from 'react';
import { Link } from 'react-router-dom';



const HeroinCard = ({ id, name, description}) => {
  return (
    <Link className='Link' to={`/heroins/${id}`}>
      <div id='heroinCard'>   
        <h3 id='heroinName'> MEET {name}</h3>
        <p id='heroinDescription'>{description}</p>
      </div>
    </Link>
  );
};

export default HeroinCard;
