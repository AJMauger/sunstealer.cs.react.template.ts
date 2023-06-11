import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./custom.css";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes: any[]=[
  {
    index: true,
    element: <Home />
  },
  {
    path: "/counter",
    element: <Counter />
  },
  {
    path: "/fetch-data",
    element: <FetchData />
  }
];

export default class App extends Component {
  static displayName = App.name;
  
  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
