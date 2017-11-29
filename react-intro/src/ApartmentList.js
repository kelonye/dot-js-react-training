import React from 'react';
import PropTypes from 'prop-types';
import Apartment from './Apartment';

class ApartmentList extends React.Component {
  render() {
    const {apartments} = this.props;
    return (
      <div>
        <h4>Apartment list</h4>
        {apartments.length ? this.renderBody() : this.renderEmpty()}
      </div>
    );
  }

  renderEmpty() {
    return <div>No apartments found</div>;
  }

  renderBody() {
    const {apartments, toggleFavorite} = this.props;
    return apartments.map(({apartment, isFavorite}) => <Apartment key={apartment.id} {...apartment} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />);
  }
}

ApartmentList.propTypes = {
  apartments: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default ApartmentList;
