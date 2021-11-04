import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import Navigator from './src/navigation';
import store from './src/store';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
