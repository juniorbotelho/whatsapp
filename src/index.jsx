import './style/global.scss'

import './style/components/header.scss'

import './style/pages/home.scss'

import './style/layout/home.layout.scss'

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Header from './components/header'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
