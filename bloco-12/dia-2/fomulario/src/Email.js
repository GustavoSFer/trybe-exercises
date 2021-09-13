import React from 'react';

class Email extends React.Component {
  render() {
  const { value, onChange } = this.props;
  let erro = undefined;
  if(value.length < 5 ) erro = "email incorreto";
    return(
      <label htmlFor="email"> Email: 
       <input type="email" id="email" name="email" value={value} onChange={onChange} />
      { (erro)? erro : "" }
      </label>
    );
  }
}

export default Email;