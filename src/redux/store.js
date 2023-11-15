import { configureStore } from '@reduxjs/toolkit'

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

import { filtersSlice } from './filterSlice'
import { listContSlice } from './slice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['value'],
}

const persistedReducer = persistReducer(persistConfig, listContSlice.reducer)

export const store = configureStore({
    reducer : {
        contact: persistedReducer,
        filter: filtersSlice.reducer,
    },
    //? ігнорування екшинів , помилки в консолі 
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store)




