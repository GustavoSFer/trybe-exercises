import List from './List';
import { Provider } from 'react-redux';
import store from './redux/Store';

function App() {
  return (
    <Provider store={ store }>
      <div>
        <List />
      </div>
    </Provider>
  );
}

export default App;
