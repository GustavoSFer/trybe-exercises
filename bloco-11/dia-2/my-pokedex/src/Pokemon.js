import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pk } = this.props;

    return (
      <div>
       <h2>{pk.name}</h2>
       <p>{pk.type}</p>
       <p>{pk.averageWeight.value} {pk.averageWeight.measurementUnit}</p>
       <img src={pk.image} alt={pk.name}/>
      </div>
    )
  }
}

export default Pokemon;