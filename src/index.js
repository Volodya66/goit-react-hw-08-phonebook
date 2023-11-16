import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 <Provider store={store} >
  <PersistGate persistor={persistor}>
   <BrowserRouter  basename='/goit-react-hw-06-phonebook-styled'>
      <App />
    </BrowserRouter>
   </PersistGate>   
  </Provider>
   
  </React.StrictMode>
);
