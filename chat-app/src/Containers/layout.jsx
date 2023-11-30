import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { Route,Switch } from "react-router-dom";
import Header from "../components/header";
import routes from "../route";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <Row>
            <switch>
              {routes.map((r, i) => {
                return r.Component ? (
                  <Route
                    key={i}
                    path={r.path}
                    exact={r.exact}
                    render={p => <r.Component {...p} />}
                  />
                ) : null;
              })}
            </switch>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Layout;