import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { PageHeader, Button } from "antd";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundColor: "#F5FF5"
        }}
      >
        <PageHeader
          ghost={false}
          style={{
            background: "#353332",
            color: "white",
            fontFamily: "Pacifico"
          }}
          title="Meetup"
          subTitle="A perfect place for meeting!"
          extra={[
            <Button key="3">
              <NavLink to="/host">Host</NavLink>
            </Button>,
            <Button key="2">
              <NavLink to="/visitors">Visitor</NavLink>
            </Button>,
            <Button key="1">
              <NavLink to="/home">About</NavLink>
            </Button>
          ]}
        ></PageHeader>
      </div>
    );
  }
}

export default NavBar;