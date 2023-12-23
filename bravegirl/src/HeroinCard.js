import React from 'react';
import { Link } from 'react-router-dom';

const HeroinCard = ({ id, img, name, description }) => {
  return (
    <Link className='Link' to={`/heroins/${id}`}>
      <img src={img} alt='heroin' className='heroinImg' />
      <h3 className='heroinName'>{name}</h3>
      <p className='heroinDescription'>{description}</p>
    </Link>
  );
};

export default HeroinCard;
