import { configureStore } from "@reduxjs/toolkit";

import connectionsReducer from './connectionsAPI/contactReducer'
import contactReducer from './contactAPI/contactReduser'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['token'],
}
const persistedReducer = persistReducer(persistConfig, connectionsReducer)

export const store = configureStore({
    reducer: {
        users: persistedReducer,
        contact :contactReducer,
    },
     //? ігнорування екшинів , помилки в консолі 
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
