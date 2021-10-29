import React from 'react';
import Neta from './Neta';
import MyContext from './MyContext';

class Bizavo extends React.Component {
  constructor() {
    super();
    this.state = {
      money: 100000,
    }
    this.gastarMoney = this.gastarMoney.bind(this);
  }

  gastarMoney() {
    this.setState((prevState) => ({
      money: prevState.money - 100,
    }));
  }

  render(){
    const contextValue = {
      money: this.state.money,
      gastar: this.gastarMoney,
    }
    return (
      <div>
        <p>Oi, eu só a bizavo</p>
        <MyContext.Provider value={ contextValue }>
          <Neta />
        </MyContext.Provider>
      </div>

    );
  }
}

export default Bizavo;
