import React, { Component } from 'react'
import { HashRouter, Route, Switch,Redirect } from "react-router-dom";


// 引入组件
import  Login from "./Login";
import  Send from "./Send";


export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route  path="/send" component={Send} />
          <Redirect from="/*" to="/"></Redirect>
        </Switch>
      </HashRouter>
    )
  }
}
