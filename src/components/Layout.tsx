import React  from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";

interface IProps { 
  children: any;
}

interface IState { 
}

export class Layout extends React.Component<IProps, IState> {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container tag="main">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
