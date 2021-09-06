import React from 'react';

class TextoInfo extends React.Component {
  render() {
    const { value, onChange } = this.props
    return(
      <fieldset>
        <label>
          <textarea type="text" name="textoInfo" value={value} onChange={onChange}/>
        </label>
      </fieldset>
    );
  }
}

export default TextoInfo;