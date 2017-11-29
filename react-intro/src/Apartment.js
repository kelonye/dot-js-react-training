import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({rating}) => {
  const ret = [];
  for (let i=0; i<=rating; i++) {
    ret.push('⭐');
  }
  return ret;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

const Apartment = ({image, title, price, rating}) => (
  <div>
    <h4>{title}</h4>
    <img src={image} alt='apartment' />
    <p>${price} per night</p>
    <Rating rating={rating} />
  </div>
);

Apartment.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Apartment;
