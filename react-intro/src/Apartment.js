import React from 'react';
import PropTypes from 'prop-types';

const Dot = ({radius, color}) => (
  <svg height={2 * radius} width={2 * radius}>
    <circle cx={radius} cy={radius} r={radius} fill={color} />
  </svg>
);

Dot.propTypes = {
  color: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
};


const Apartment = ({id, imageUrl, title, price, rating, isAvailable, isFavorite, toggleFavorite}) => (
  <div className='apartment'>
    <img src={imageUrl} alt='apartment' />
    <h4 className='flex flex--align-center'>
      <Dot color={isAvailable ? 'green' : 'red'} radius={7.5} />
      &nbsp;
      {title}
      &nbsp;
      <button onClick={() => toggleFavorite(id)}>
        <span role='img' aria-label='favorite'>💙</span>
        &nbsp;
        {isFavorite ? 'Remove favorite' : 'Set favorite'}
      </button>
    </h4>
    <p>${price} per night</p>
    <div>{'⭐'.repeat(rating)}</div>
  </div>
);

Apartment.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default Apartment;
