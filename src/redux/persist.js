// src/persist.js
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const persist_Reducer = (reducer) => persistReducer(persistConfig, reducer);

export const persist_Store = (store) => persistStore(store);