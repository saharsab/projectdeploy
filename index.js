// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import Navbar from './navbar';
// import App from './redux/app';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// index.js
process.env.NODE_ENV = 'production';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/config/store';
import Form from './redux/app';
import './index.css';
import Counter from './redux/config/Counter';


ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
