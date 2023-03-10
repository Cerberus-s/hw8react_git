import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import PostPage from './components/posts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Switch>
      <Route exact path={"/"}>
        <App />
      </Route>
      <Route exact path={"/post/:id"}>
        <PostPage />
      </Route>
    </Switch>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
