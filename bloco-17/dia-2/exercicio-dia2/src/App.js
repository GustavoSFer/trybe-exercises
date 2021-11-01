import ListaProvider from './ListaProvider';
import Input from './Input';
import Lista from './Lista';

function App() {
 
  return (
    <div>
      <ListaProvider >
        <Input />
        <Lista />
      </ListaProvider>
    </div>
  );
}

export default App;
