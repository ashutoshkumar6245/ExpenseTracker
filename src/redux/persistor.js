// src/persistor.js
import { persist_Store } from './persist';
import store from './store';

const persistor = persist_Store(store);

export default persistor;