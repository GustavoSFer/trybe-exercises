import React, { Component } from 'react';
import { connect } from 'react-redux';

import { adicionarOItem } from '../Redux/Actions';

class Inputs extends Component {
  constructor(){
    super();
    this.state = {
      textList: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}){
    const { name } = target;
    const value = target.value === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { add, type } = this.props;
    const { textList } = this.state;
    return (
     <div>
        <label htmlFor= 'textList'>
        <input 
          type={ type }
          name= 'textList'
          value={ textList }
          id= 'textList'
          onChange={ this.handleChange }
        />
      </label>
      <button type="button" onClick={ () => add(textList) }>Salvar na lista</button>    
     </div>

    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  add: (value) => dispatch(adicionarOItem(value)),
})

export default connect(null, mapDispatchToProps)(Inputs);
