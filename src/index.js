//? import {store} from './redux/contact/storeeee'

import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store'
import { persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 <Provider store={store} >
  <PersistGate persistor={persistor}>
   <BrowserRouter  basename='/goit-react-hw-08-phonebook'>
      <App />
    </BrowserRouter>
   </PersistGate>   
  </Provider>
   
  </React.StrictMode>
);
