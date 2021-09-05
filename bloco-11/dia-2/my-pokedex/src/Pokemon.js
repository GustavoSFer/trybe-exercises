import React from 'react';
import PropTypes from 'prop-types';
import App from './index.css'

class Pokemon extends React.Component {
  render() {
    const { pk } = this.props;

    return (
      <div className='card-pokemon'>
        <div className='info-pokemon'>
          <h2>{pk.name}</h2>
          <p>{pk.type}</p>
          <p>{pk.averageWeight.value} {pk.averageWeight.measurementUnit}</p>
        </div>
        <img src={pk.image} alt={pk.name}/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
}

export default Pokemon;