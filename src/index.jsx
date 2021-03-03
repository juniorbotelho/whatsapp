import './style/global.scss'
import './style/components/header.scss'
import './style/pages/home.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
