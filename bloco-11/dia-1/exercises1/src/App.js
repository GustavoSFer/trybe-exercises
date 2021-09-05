import logo from './logo.svg';
import './App.css';

function App() {
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  const nomes = ['Gustavo', 'Pedro', 'Amanda', 'Paulinha']
  return (
   <ul> { nomes.map((item) => (Task(item))) } </ul> 
  );
}

export default App;
