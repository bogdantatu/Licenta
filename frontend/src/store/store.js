import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import reducer from './reducer';

const middleware = [logger];

export const store = createStore(reducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

