import React from 'react'

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

  render() {
    return(
      <div>
        <h1>Meu primeiro formulário em React</h1>
        <form>
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
          <label htmlFor="nome"> Nome: 
            <input type="text" name="nome" id="nome" value={this.state.nome} onChange={this.handleState}/>
          </label>
          <br />
          <label htmlFor="idade"> Idade: 
            <input type="number" name="idade" id="idade" value={this.state.idade} onChange={this.handleState} />
          </label>
          <br />
          <label htmlFor="email"> Email: 
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleState} />
          </label>
          <br />
          <label htmlFor="comentario"> Deixe sei comentário:
            <textarea type="text" id="comentario" name="comentario" value={this.state.cometario} onChange={this.handleState} />
          </label>
          <br />
          <label htmlFor="aceito">
            Aceita receber email?
            <input type="checkbox" name="aceito" id="aceito" value={this.state.aceito} onChange={this.handleState} />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;