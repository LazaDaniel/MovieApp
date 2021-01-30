import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './rootReducer';
import { persistReducer, persistStore ,autoRehydrate} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store,null);
export {store,persistor}