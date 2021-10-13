import React, { Component } from 'react';
import ListaGerado from './ListaGerado';

class List extends Component {
  constructor() {
    super();
    this.state = {
      lblText: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { lblText } = this.state;
    return (
      <div>
        <div>
          <input type="text" onChange={ this.handleOnChange } name="lblText" value={ lblText } />
          <button type="button">Adicionar a lista</button>
        </div>
        <div>
          <ListaGerado />
        </div>
      </div>
    );
  }
}

export default List;
