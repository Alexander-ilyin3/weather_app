import { Provider } from 'react-redux';

import './App.css';
import { Layout } from './components/Layout/Layout';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
