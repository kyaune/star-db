import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import "./app.css";
import ErrorIndicator from "../error-indicator";

export default class App extends React.Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}
