import React from 'react';
import './assets/scss/global.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import Todo from './pages/todos';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;