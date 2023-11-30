import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Containers/layout";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <switch>
            <Route path="/" component={Layout} />
          </switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;