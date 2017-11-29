import React from 'react';
import ApartmentList from './ApartmentList';
import SearchBar from './SearchBar';

const APARTMENTS = [
  {
    id: 1,
    title: 'Studio in historical center',
    price: 59,
    imageUrl: 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg',
    rating: 3,
    isAvailable: true,
  },
  {
    id: 2,
    title: 'Cozy apartment',
    price: 30,
    imageUrl: 'https://a0.muscache.com/im/pictures/19755676/c2d3162d_original.jpg?aki_policy=large',
    rating: 4,
    isAvailable: false,
  }
];

class App extends React.Component {
  state = {
    searchValue: '',
    showAll: false,
    favorites: [1],
  }

  toggleFavorite(id) {
    let {favorites} = this.state;
    const idx = favorites.indexOf(id);
    if (-1 === idx) {
      favorites = favorites.concat([id]);
    } else {
      favorites = favorites.filter(f => f !== id);
    }

    this.setState({favorites});
  }

  render() {
    const {searchValue, showAll, favorites} = this.state;
    const availableApartments = APARTMENTS.filter(({isAvailable}) => !(showAll && !isAvailable));
    const filteredApartments = availableApartments
      .filter(({title}) => !(searchValue && -1 === title.search(new RegExp(searchValue, 'i'))))
      .map(apartment => {
        const isFavorite = -1 !== favorites.indexOf(apartment.id);
        return {apartment, isFavorite};
      });

    return (
      <div className='apartments'>
        <SearchBar searchValue={searchValue} onChangeText={searchValue => this.setState({searchValue})} />
        <br/>

        {!!searchValue && !!filteredApartments.length && <div>Found {filteredApartments.length} out of {availableApartments.length}</div>}

        <button onClick={() => this.setState({showAll: !showAll})}>
          {showAll ? 'Show All' : 'Show Available Only'}
        </button>

        <ApartmentList apartments={filteredApartments} toggleFavorite={id => this.toggleFavorite(id)} />
      </div>
    );
  }
}

export default App;
