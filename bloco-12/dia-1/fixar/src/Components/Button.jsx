import React from 'react';

class Button extends React.Component {
  render() {

    const { funcao } = this.props;
    
    return(
      <button Onclick={ funcao } >{this.props.children}</button>
    );
  }
}

export default Button;