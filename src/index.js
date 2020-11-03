import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import decode from 'jwt-decode';
import { syncInfoAc } from './pages/login/store/actionCreators';


const tk = localStorage.getItem('@#@TOKEN');
// 解析TOKEN并同步到Redux
if (tk) {
  try {
    store.dispatch(syncInfoAc(decode(tk)))
  } catch {
    localStorage.removeItem('@#@TOKEN');
    window.location.href = '/login';
  }
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);