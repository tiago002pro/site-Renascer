import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Music from '../src/Pages/Music';
import Video from '../src/Pages/Video';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/musicas" component={Music} />
        <Route path="/videos" component={Video} />
        <Route component= {() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

