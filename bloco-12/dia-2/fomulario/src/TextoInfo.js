import React from 'react';

class TextoInfo extends React.Component {
  render() {
    const { value, onChange } = this.props

    let erro = undefined;
    if(value.length > 120) erro = 'Mensagem muito grande!';

    return(
      <fieldset>
        <label>
          <textarea type="text" name="textoInfo" value={value} onChange={onChange}/>
          { (erro !== undefined) ? erro : '' }
        </label>
      </fieldset>
    );
  }
}

export default TextoInfo;