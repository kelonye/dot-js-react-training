import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({searchValue, onChangeText}) => (
  <input defaultValue={searchValue} onChange={e => onChangeText(e.target.value.trim())} placeholder='Search...' />
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default SearchBar;
