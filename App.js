import React from 'react';
import Route from './src/Router/Route'
import { Root } from 'native-base';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import rootreducer from './src/Redux/reducer'
import rootSaga from './src/Redux/saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootreducer,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Root>
      <Provider store={store}>
        <Route />
      </Provider>
    </Root>
  );
};


export default App;
