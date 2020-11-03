import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
// 引用组件
import Login from './pages/login/index';
import Register from './pages/register/index'
import Decide from './pages/decide/index';
import Auth from './utils/auth';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Decide} exact path="/" />
          {/* <Route component={Register} exact path="/" /> */}
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          <Route component={Auth(Decide)} path="/decide" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
