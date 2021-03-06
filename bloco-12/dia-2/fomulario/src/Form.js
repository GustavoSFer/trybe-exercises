import React from 'react'
import TextoInfo from './TextoInfo';
import Email from './Email';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      estado: '',
      nome: '',
      idade: 0,
      email: '',
      comentario:'',
      aceito: false,
      file: '',
      textoInfo: '',
      formularioComErros: true,
    }
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value
    })
  }

  formularioComErros(value) {
    (value === true) ? this.setState({
      formularioComErros: false,
    }) : this.setState({
      formularioComErros: true,
    })
  }

  render() {
    return(
      <div>
        <h1>Meu primeiro formulário em React</h1>
        
        <TextoInfo value={this.state.textoInfo} onChange={this.handleState} formularioComErros={this.formularioComErros}/>

        <form>
          <fieldset>
            <legend>Dados Pessoais:</legend>
            <label htmlFor="nome"> Nome: 
              <input type="text" 
                name="nome" 
                id="nome" 
                value={this.state.nome} 
                onChange={this.handleState}
              />
            </label>
            <br />
            <label htmlFor="idade"> Idade: 
              <input type="number" name="idade" id="idade" value={this.state.idade} onChange={this.handleState} />
            </label>
            <br />
           <Email value={ this.state.email } onChange={this.handleState} />
          </fieldset>
          <br />
          <fieldset>
            <legend>Comentário/Local: </legend>
            <label htmlFor="comentario"> Deixe sei comentário:
              <textarea type="text" id="comentario" name="comentario" value={this.state.cometario} onChange={this.handleState} />
            </label>
            <br />
            <label htmlFor="estado"> Estado: 
              <select name="estado" id="estado" value={this.state.estado} onChange={this.handleState} >
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
                <option value="BH">BH</option>
                <option value="MG">MG</option>
                <option value="AM">AM</option>
              </select>
            </label>
            <br />
          </fieldset>

          <label htmlFor="aceito">
            Aceita receber email?
            <input type="checkbox" name="aceito" id="aceito" value={this.state.aceito} onChange={this.handleState} />
          </label>
          <input type="file" name="file" value={this.state.file} onChange={this.handleState}/>
        </form>
      </div>
    );
  }
}

export default Form;