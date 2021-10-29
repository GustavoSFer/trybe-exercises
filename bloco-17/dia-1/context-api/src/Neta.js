import React from 'react';
import MyContext from './MyContext';

class Neta extends React.Component {
  render() {
    return (
      <div>
        Eu sou a neta;
        <MyContext.Consumer>
          { (value) => (
            <div>
              <p>{`eu tenho ${value.money} para gastar`}</p>
              <button onClick={value.gastar}>Gastar com IFOOD</button>
            </div>
          ) }
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Neta;
