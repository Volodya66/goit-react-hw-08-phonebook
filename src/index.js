// import { PersistGate } from 'redux-persist/integration/react'
// import {  store } from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import {store} from './redux/contact/storeeee'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 <Provider store={store} >
  {/* <PersistGate persistor={persistor}> */}
   <BrowserRouter  basename='/goit-react-hw-07-phonebook'>
      <App />
    </BrowserRouter>
   {/* </PersistGate>    */}
  </Provider>
   
  </React.StrictMode>
);
