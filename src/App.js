import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
// 引用组件
import Login from './views/login/index';

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
          <Route component={Login} exact path="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
