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
    }
    this.nome = this.nome.bind(this);
    this.idade = this.idade.bind(this);
  }

  nome(event) {
    this.setState({
      nome: event.target.value,
    })
  }

  idade(event) {
    this.setState({
      idade: event.target.value,
    })
  }

  render() {
    return(
      <div>
        <h1>Meu primeiro formulário em React</h1>
        <form>
          <label htmlFor="estado"> Estado: 
            <select name="estado" id="estado">
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
              <option value="BH">BH</option>
              <option value="MG">MG</option>
              <option value="AM">AM</option>
            </select>
          </label>
          <br />
          <label htmlFor="nome"> Nome: 
            <input type="text" id="nome" value={this.state.nome} onChange={this.nome}/>
          </label>
          <br />
          <label htmlFor="idade"> Idade: 
            <input type="number" id="idade" value={this.state.idade} onChange={this.idade} />
          </label>
          <br />
          <label htmlFor="email"> Email: 
            <input type="email" id="email" />
          </label>
          <br />
          <label htmlFor="comentario"> Deixe sei comentário:
            <textarea type="text" id="comentario" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;